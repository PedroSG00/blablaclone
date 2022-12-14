import socket from "../../config/socket.config"
import { useEffect, useState } from "react"
import chatService from "../../services/chat.service"
const Chat = ({ chatId }) => {

    // const [chatDetails, setChatDetails] = useState({

    // })
    // const handleChatDetails = () => {
    //     chatService
    //         .getChatDetais(chatId)
    // }


    useEffect(() => {
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


}

export default Chat