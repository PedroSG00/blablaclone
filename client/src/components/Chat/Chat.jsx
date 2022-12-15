import './Chat.css'
import { useEffect, useState, useContext } from "react"
import chatService from "../../services/chat.service"
import { SocketContext } from "../../context/socket.context"
import socket from '../../config/socket.config'
import { Button, Container, Form, InputGroup } from "react-bootstrap"
import ChatForm from '../ChatForm/ChatForm'
import Messages from '../Messages/Messages'

const Chat = ({ chatId }) => {

    const { connection } = useContext(SocketContext)


    // useEffect(() => {
    //     chatId !== '' && chatService.getChatDetails(chatId).then(({ data }) => setChatDetails(data))
    // }, [])

    useEffect(() => {
        connection.on('ConnectResponse', (payload) => { console.log('--------------', payload) })
    }, [connection])




    return (
        <div className="ChatView">
            <Messages chatId={chatId} />
            <ChatForm chatId={chatId} socket={socket} />
        </div>
    )

}

export default Chat

