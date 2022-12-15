import { InputGroup, Form, Button } from "react-bootstrap"
// import socket from "../../config/socket.config"
import { useState, useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import chatService from "../../services/chat.service"
const ChatForm = ({ chatId, socket }) => {

    const { user } = useContext(AuthContext)
    const { username } = user
    const [newMessage, setNewMessage] = useState('')
    const [chatDetails, setChatDetails] = useState({})


    const handleMessage = (e) => {
        setNewMessage(e.target.value)
    }


    const handleFormSubmit = (e) => {
        e.preventDefault()
        sendMessage()
    }

    const sendMessage = async () => {
        if (newMessage !== "") {

            const messageData = {

                room: chatId,
                author: username,
                message: newMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()

            }

            await socket.emit("sendMessage", messageData)

            const { time, message, room } = messageData

            chatId !== '' && chatService.getChatDetails(chatId).then(({ data }) => setChatDetails(data))

            chatService.sendMessage(room, { time, message })

            setNewMessage("")

        }
    }


    return (
        <div>
            <Form onSubmit={handleFormSubmit} className='d-flex'>
                <InputGroup>
                    <Form.Group className="mb-3 mt-3 w-75" controlId="text">
                        <Form.Control onChange={handleMessage} type="text" />
                    </Form.Group>
                    <Button type="submit">
                        Send
                    </Button>
                </InputGroup>
            </Form>
        </div>
    )

}
export default ChatForm