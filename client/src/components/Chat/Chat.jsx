import socket from "../../config/socket.config"
import chatService from "../../services/chat.service"

import { useEffect, useState } from "react"

const Chat = ({ chatId }) => {

    const [chatDetails, setChatDetails] = useState({})



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


    console.log(chatDetails)

    return (
        <>
        </>
    )

}

export default Chat