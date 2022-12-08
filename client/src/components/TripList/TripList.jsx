import './TripList.css'
import { useState, useEffect } from 'react'
import TripCard from '../../components/TripCard/TripCard'
import { Container, Row, Col } from 'react-bootstrap'

const TripList = ({ tripList }) => {





    return (
        <div className='TripList'>
            {tripList.map(elm => < TripCard key={elm._id} tripData={elm} />)}
        </div >
    )
}

export default TripList