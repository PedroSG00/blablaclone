import { Link } from 'react-router-dom'
import './HomePage.css'
import SearchTripForm from '../../components/SearchTripForm/SearchTripForm'

const HomePage = () => {

    return (
        <div className='HomePage'>
            <SearchTripForm />
        </div>
    )
}

export default HomePage