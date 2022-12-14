const Chat = require("../models/Chat.model")

const getChatDetails = (req, res, next) => {

    const { chat_id } = req.body
    Chat.findById(chat_id)
        .populate({
            path: 'messages',
            populate: {
                path: 'author text time'
            }
        })
        .then(chat => res.json(chat))
        .catch(err => next(err))
}

const sendMessage = (req, res, next) => {
    const { _id: user_id } = req.payload
    const { author = user_id, message, time } = req.body
    const { chat_id } = req.params

    Chat
        .findByIdAndUpdate(chat_id, { $push: { messages: { author: author, text: message, time } } }, { new: true })
        .then((data) => {
            console.log(data)
            res.json(data)
        })
        .catch(err => next(err))

}

module.exports = {
    getChatDetails,
    sendMessage
}