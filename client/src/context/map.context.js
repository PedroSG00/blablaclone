import { createContext, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";



const MapContext = createContext()

const MapProvider = (props) => {
    const [map, setMap] = useState(null)
    const [libraries] = useState(["places"])
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: libraries
    })

    return (
        <MapContext.Provider value={{ isLoaded, map, setMap }}>
            {props.children}
        </MapContext.Provider>
    )


}

export { MapContext, MapProvider }