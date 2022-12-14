import { useEffect, useState, useContext } from "react"
import chatService from "../../services/chat.service"
import { SocketContext } from "../../context/socket.context"
import { Button, Container } from "react-bootstrap"

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
        <Container>
            <div >
                <div  >
                    <Button>Hols</Button>
                </div>
            </div>
            <form className='input-container'>
                <input type="text" placeholder='Type your message here!' />
                <button>
                </button>
            </form>
        </Container>
    )

}

export default Chat


// const Container = styled.div`
// display: grid;
// grid-template-columns: 5% 95%;
// align-items: center;
// background-color: #080420;
// padding: 0 2rem;
// padding-bottom: 0.3rem;
// @media screen and (min-width: 720px) and (max-width: 1080px){
//     padding: 0 1rem;
//     gap: 1rem;
// }
// .button-container{
//     display: flex;
//     align-items: center;
//     color: white;
//     gap: 1rem;
//     .emoji{
//         position: relative;
//         svg{
//             font-size: 1.5rem;
//             color: #ffff00c8;
//             cursor: pointer;
//         }
//         .emoji-picker-react{
//             position: absolute;
//             top: -350px;
//             background-color: #080420;
//             box-shadow: 0 5px 10px #9a86f3;
//             border-color: #9186f3;
//             .emoji-scroll-wrapper::-webkit-scrollbar{
//                 background-color: #080420;
//                 width: 5px;
//                 &-thumb {
//                     background-color: #9a86f3;
//                 }
//             }
//             .emoji-categories{
//                 button{
//                     filter: contrast(0);
//                 }
//             }
//             .emoji-search{
//                 background-color: transparent;
//                 border-color: #9186f3;
//                 color: white;
//             }
//             .emoji-group:before {
//                 background-color: #080420;
//             }
//         }
//     }
// }

// .input-container{
//     width: 100%;
//     border-radius: 2rem;
//     display: flex;
//     align-items: center;
//     gap: 2rem;
//     background-color: #ffffff34;
//     input{
//         width: 90%;
//         height: 60%;
//         background-color: transparent;
//         color: white;
//         border: none;
//         padding-left: 1rem;
//         font-size: 1.2rem;
//         &::selection{
//             background-color: #9186f3;
//         }
//         &:focus{
//             outline: none;
//         }
//     }
//     button{
//         padding: 0.3rem 2rem;
//         border-radius: 2rem;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         background-color: #9a86f3;
//         border: none;
//         cursor: pointer;
//         @media screen and (min-width: 720px) and (max-width: 1080px){
//             padding: 0.3rem 1rem;
//             svg{
//             font-size: 1rem;
//             color: white;
//         }
//         }
//         svg{
//             font-size: 2rem;
//             color: white;
//         }
//     }
// }
// `;
