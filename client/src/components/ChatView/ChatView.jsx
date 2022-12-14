import { useEffect, useState, useContext } from "react"
import chatService from "../../services/chat.service"
import { SocketContext } from "../../context/socket.context"

const Chat = ({ chatId }) => {

    const { connection } = useContext(SocketContext)
    const [chatDetails, setChatDetails] = useState({})

    useEffect(() => {
        chatId !== '' && chatService.getChatDetails(chatId).then(({ data }) => setChatDetails(data))
    }, [])

    useEffect(() => {
        connection.on('ConnectResponse', (payload) => { console.log('--------------', payload) })
        console.log(connection)
    }, [connection])




    return (
        <>
        </>
    )

}

export default Chat