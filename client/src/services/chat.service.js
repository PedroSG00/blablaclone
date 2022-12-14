import axios from 'axios'

class ChatService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/chat`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getChatDetails(chat_id) { this.api.get(`/${chat_id}`) }

    sendMessage(chat_id) { this.api.put(`/${chat_id}/send`) }


}

const chatService = new ChatService()

export default chatService