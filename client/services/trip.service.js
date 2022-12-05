import axios from "axios"

class TripService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/trip`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllTrips = () => this.api.get("/list")

    getTripDetails = (tripID) => this.api.get(`/${tripID}`)

    createTrip = () => this.api.post("/create")

    joinTrip = (tripID) => this.api.post(`/${tripID}/join`)

    leaveTrip = (tripID) => this.api.post(`/${tripID}/leave`)

    editTrip = (tripID) => this.api.put(`/${tripID}/edit`)

    deleteTrip = (tripID) => this.api.delete(`/${tripID}/delete`)

}