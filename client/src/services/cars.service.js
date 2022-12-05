import axios from 'axios'

class CarsService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/car`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getCars() {
        return this.api.get('/list')
    }

    getFilteredCars(make, model, year) {
        return this.api.get(`/?make=${make}&model=${model}&year=${year}`)
    }

    createCar(carData) {
        return this.api.post('/create', carData)
    }

    updateCar(car_id) {
        this.api.put(`/${car_id}/edit`)
    }

    deleteCar(car_id) {
        this.api.delete(`/${car_id}/delete`)
    }


}

const carsService = new CarsService()

export default carsService