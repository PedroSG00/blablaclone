const express = require('express');
const router = express.Router();

const { isAuthenticated } = require('../middleware/jwt-middleware')
const { addComment, deleteComment } = require('../controllers/comment.controller')

router.post('/:user_id/add-comment', isAuthenticated, addComment)

router.delete('/:user_id/:comment_id/delete-comment', isAuthenticated, deleteComment)

module.exports = router;