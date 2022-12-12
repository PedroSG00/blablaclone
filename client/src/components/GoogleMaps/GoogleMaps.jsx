import { useCallback, useContext, useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker, DirectionsRenderer } from "@react-google-maps/api"
import Loader from "../Loader/Loader";
import { MapContext } from "../../context/map.context";

const MapComponent = ({ markers }) => {


    const [route, setRoute] = useState(null)
    const { isLoaded, map, setMap, location, setLocation } = useContext(MapContext)
    const onLoad = useCallback((map) => {
        setMap(map)
        map.setCenter(location)
    }, [])

    useEffect(() => {
        console.log(location)
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords
            if (!markers.origin_address && !markers.destination_address && map) {
                setLocation({ lat: latitude, lng: longitude })
                console.log("markers", markers)
                console.log(location)
            } else {
                console.log("Estoy entrando en esta puta")
                setLocation(markers.origin_address)
            }
        })
    }, [map])

    useEffect(() => {
        if (map && markers.origin_address && markers.destination_address) {
            const bounds = new window.google.maps.LatLngBounds()
            bounds.extend(markers.origin_address)
            bounds.extend(markers.destination_address)
            map.fitBounds(bounds)
            calculateRoute(markers)
        }
    }, [markers])

    const calculateRoute = (markers) => {
        const directionService = new window.google.maps.DirectionsService()
        directionService.route({
            origin: markers.origin_address,
            destination: markers.destination_address,
            travelMode: window.google.maps.TravelMode.DRIVING
        })
            .then(result => setRoute(result))
    }

    const mapStyles = [
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f7f1df"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#d0e3b4"
                }
            ]
        },
        {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.business",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.medical",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#fbd3da"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#bde6ab"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffe15f"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#efd151"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "black"
                }
            ]
        },
        {
            "featureType": "transit.station.airport",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#cfb2db"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#a2daf2"
                }
            ]
        }
    ]

    const mapOptions = {
        styles: mapStyles,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
    }

    if (!isLoaded) return <Loader />



    return (
        <GoogleMap zoom={14} options={mapOptions} onLoad={onLoad} center={location} mapContainerStyle={{ width: "100%", height: "100%", borderRadius: "10px" }} >
            <>
                if (markers!=={ }) {
                    Object.values(markers).map((position, index) => {
                        return (
                            <Marker key={index} position={position}></Marker>
                        )
                    })
                }
                {route && <DirectionsRenderer directions={route} />}

            </>
        </GoogleMap>
    )

}

export default MapComponent