import axios from "axios";

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

    getOwnTrips = () => this.api.get(`/mytrips`)

    createTrip = (tripData) => this.api.post("/create", tripData)

    joinTrip = (tripID) => this.api.post(`/${tripID}/join`)

    leaveTrip = (tripID) => this.api.post(`/${tripID}/leave`)

    editTrip = (tripID, tripData) => this.api.put(`/${tripID}/edit`, tripData)

    deleteTrip = (tripID) => this.api.delete(`/${tripID}/delete`)

    searchTrip = (lat, lng) => this.api.post(`/search`)
}


const tripService = new TripService()

export default tripService








