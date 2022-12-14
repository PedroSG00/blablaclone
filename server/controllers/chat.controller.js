const Chat = require("../models/Chat.model")

const getChatDetails = (req, res, next) => {
    const { chat_id } = req.params
    Chat.findById(chat_id)
        .then(chat => res.json(chat))
        .catch(err => next(err))
}

const sendMessage = async (req, res, next) => {
    try {
        const { _id: user_id } = req.payload
        const { message, time } = req.body

        await MatchModel.findByIdAndUpdate(req.params.id, { $push: { messages: { author: user_id, text: message, time: time } } }, { new: true })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getChatDetails
}