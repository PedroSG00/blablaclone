import { Link } from 'react-router-dom'

const ChatList = ({ chatList, setChatId }) => {

    return (

        chatList?.map(chat => {

            const { trip } = chat
            const { _id } = chat

            return (
                <div key={chat._id} className='chatWrapper' onClick={() => setChatId(_id)}>
                    <h3 className='chatTitle'> {trip.origin_address} - {trip.destination_address}</h3>

                </div>
            )
        }))



}

export default ChatList