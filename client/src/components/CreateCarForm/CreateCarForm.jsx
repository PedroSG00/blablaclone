import './CreateCarForm.css'
import Select from 'react-select'
import carsService from '../../services/cars.service'
import { useEffect, useState } from 'react'
const CreateCarForm = () => {

    const [cars, setCars] = useState([])
    const [make, setMake] = useState([])
    const [model, setModel] = useState([])
    const [year, setYear] = useState([])


    const [filteredModel, setFilteredModel] = useState([])
    const [filteredYear, setFilteredYear] = useState([])


    const getCars = () => {
        carsService
            .getCars()
            .then(({ data }) => setCars(data))
            .catch(err => console.log(err))
    }

    const carsMake = cars?.map(elm => (elm.make))

    const carsModel = filteredModel?.map(elm => (elm.model))

    const carsYear = filteredYear?.map(elm => (elm.year))


    const uniqueCarsMake = [... new Set(carsMake)]

    const uniqueCarsModel = [... new Set(carsModel)]

    const uniqueCarsYear = [... new Set(carsYear)]



    const handleMakeValue = e => setMake(e.value)
    const handleModelValue = e => setModel(e.value)
    const handleYearValue = e => setYear(e.value)




    const filterCarsMake = () => {
        carsService
            .getFilteredCars(make)
            .then(({ data }) => setFilteredModel(data))
            .catch(err => console.log(err))
    }


    const filterCarsYear = () => {
        carsService
            .getFilteredCars(make, filteredModel)
            .then(({ data }) => setFilteredYear(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getCars()
        filterCarsMake()
        filterCarsYear()
    }, [make, model, year])



    return (
        uniqueCarsMake
        &&
        <>
            <Select
                options={uniqueCarsMake.map(elm => ({ label: elm, value: elm }))}
                onChange={handleMakeValue}
            />
            <Select
                options={uniqueCarsModel.map(elm => ({ label: elm, value: elm }))}
                onChange={handleModelValue}
            />
            <Select
                options={uniqueCarsYear.map(elm => ({ label: elm, value: elm }))}
                onChange={handleYearValue}
            />
        </>
    )
}

export default CreateCarForm