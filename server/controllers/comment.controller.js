const Comment = require('../models/Comment.model')
const User = require('../models/User.model')

const addComment = (req, res, next) => {

    const { user_id } = req.params
    const { text } = req.body
    const { _id: owner } = req.payload


    Comment
        .create({ owner, text })
        .then((newComment) => {
            return User.findByIdAndUpdate(user_id, { $push: { comments: newComment._id } }, { new: true })
        })
        .then(userComments => res.json(userComments))
        .catch(err => next(err))
}

const deleteComment = (req, res, next) => {

    const { user_id, comment_id } = req.params

    Comment
        .findByIdAndDelete(comment_id)
        .then(deletedComment => {
            return User.findByIdAndUpdate(user_id, { $pull: { comments: deletedComment._id } }, { new: true })
        })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => next(err))

}

module.exports = {
    addComment,
    deleteComment
}