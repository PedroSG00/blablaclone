import './TripList.css'
import TripCard from '../../components/TripCard/TripCard'


const TripList = ({ trips }) => {


    return (
        <div className='TripList'>

            {
                trips.map(elm => <TripCard key={elm._id} {...elm} />)
            }
        </div >
    )
}

export default TripList