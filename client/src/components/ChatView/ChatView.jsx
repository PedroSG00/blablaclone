import socket from "../../config/socket.config"
import chatService from "../../services/chat.service"

import { useEffect, useState } from "react"

const Chat = ({ chatId }) => {

    const [chatDetails, setChatDetails] = useState({})


    const handleChatDetails = () => {

        chatService
            .getChatDetais(chatId)
            .then(({ data }) => setChatDetails(data))
            .catch(err => console.log(err))
    }


    useEffect(() => {
        socket.disconnect()
        socket.connect()
        socket.emit('ConnectRequest', { room: chatId })
        socket.on('ConnectResponse', (payload) => { console.log('--------------', payload) })
    }, [chatId])


    useEffect(() => {
        return () => {
            socket.emit('Disconnect', { message: 'User disconnected' })
            console.log('Disconnect')
            socket.disconnect()
        }
    }, [])


    useEffect(() => {
        chatId && handleChatDetails()
    }, [chatId])


    return (
        <>
        </>
    )

}

export default Chat