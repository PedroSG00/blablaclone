import './CreateCarForm.css'
import Select from 'react-select'
import carsService from '../../services/cars.service'
import { useEffect, useState } from 'react'
const CreateCarForm = () => {

    const [cars, setCars] = useState([])
    const [make, setMake] = useState([])

    const getCars = () => {
        carsService
            .getCars()
            .then(({ data }) => setCars(data))
            .catch(err => console.log(err))
    }

    const carsMake = cars?.map(elm => (elm.make))

    const uniqueCarsMake = [... new Set(carsMake)]

    const handleMakeValue = e => setMake(e.value)

    const filterCarsMake = () => {

        make
            &&
            carsService
                .getFilteredCars(make)
                .then((data) => setMake(data))
                .catch(err => console.log(err))
    }



    useEffect(() => {
        getCars()
        filterCarsMake()
    }, [])

    return (
        uniqueCarsMake
        &&
        <>
            <Select
                options={uniqueCarsMake.map(elm => ({ label: elm, value: elm }))}
                onChange={handleMakeValue}
            />
            {/* <Select
                options={make?.map(elm => ({ label: elm.make, value: elm._id }))}
            /> */}
            {/* <Select
                options={cars.map(elm => ({ label: elm.make, value: elm._id }))}
            /> */}
        </>
    )
}

export default CreateCarForm