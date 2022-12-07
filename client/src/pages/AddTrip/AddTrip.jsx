import "./AddTrip.css"

import { Container, Row, Col } from "react-bootstrap"
import { useMemo, useState, useEffect } from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

const AddTrip = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
    })

    if (!isLoaded) return <div>Loading</div>

    return (
        <GoogleMap zoom={10} center={{ lat: 40.39264225582, lng: -3.6970498288358873 }} mapContainerClassName="map-style" />
    )

}

export default AddTrip