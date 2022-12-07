import './SearchTripPage.css'
import { useState, useEffect } from 'react'
import SearchTripForm from '../../components/SearchTripForm/SearchTripForm'
import Loader from '../../components/Loader/Loader'
import tripService from '../../services/trip.service'
import TripCard from '../../components/TripCard/TripCard'

const SearchTripPage = () => {

    const [tripList, setTripList] = useState([])


    const loadTrips = () => {
        tripService
            .getAllTrips()
            .then(({ data }) => setTripList(data))
            .catch(err => console.log(err))
    }


    useEffect(() => {
        loadTrips()
    }, [])

    return (
        <div className='SearchTripPage'>
            {tripList.map(elm => < TripCard key={elm._id} tripData={elm} />)}
        </div >
    )
}

export default SearchTripPage