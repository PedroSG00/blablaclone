const express = require('express');
const router = express.Router();
const User = require('../models/User.model')
const Comment = require('../models/Comment.model')

router.post('/:user_id', (req, res, next) => {

    const { user_id } = req.params
    const { author, text } = req.body

    Comment
        .create({ author, text })
        .then((newComment) => {
            return User.findByIdAndUpdate(user_id, { $push: { comments: newComment._id } })
        })
        .then(userComments => res.json(userComments))
        .catch(err => next(err))
})

router.post('/:user_id/:comment_id/delete-comment', (req, res, next) => {

    const { user_id, comment_id } = req.params
    console.log(comment_id)

    Comment
        .findByIdAndDelete(comment_id)
        .then(deletedComment => {
            return User.findByIdAndUpdate(user_id, { $pull: { comments: deletedComment._id } }, { new: true })
        })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => next(err))

})





module.exports = router;


