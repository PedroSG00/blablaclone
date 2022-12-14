const router = require("express").Router()
const { isAuthenticated } = require('../middleware/jwt-middleware')
const { getChatDetails } = require('../controllers/chat.controller')

router.post('/', isAuthenticated, getChatDetails)

module.exports = router