import './HomePage.css'
import SearchTripForm from '../../components/SearchTripForm/SearchTripForm'
// import Modal from '../../components/Modal/Modal'
import video from "./../../assets/video.mp4"


const HomePage = () => {

    return (
        <div className='HomePage'>
            <video src={video} autoPlay muted loop id="video"></video>
            <SearchTripForm className="search-bar" />
        </div >
    )
}

export default HomePage