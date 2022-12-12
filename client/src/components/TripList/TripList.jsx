import './TripList.css'
import TripCard from '../../components/TripCard/TripCard'


const TripList = ({ trips, loadTrips, loadOwnTrips }) => {


    return (
        <div className='TripList justify-content-center'>

            {
                trips.map(elm => {
                    return (elm.passengers?.length < elm.seats && <TripCard key={elm._id} loadTrips={loadTrips} loadOwnTrips={loadOwnTrips} {...elm} />)
                }
                )
            }
        </div >
    )
}

export default TripList