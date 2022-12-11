import './CreateCarForm.css'
import Select from 'react-select'
import carsService from '../../services/cars.service'
import { Form } from 'react-bootstrap'
import { useEffect, useState } from 'react'
const CreateCarForm = () => {

    const [cars, setCars] = useState([])
    const [make, setMake] = useState([])
    const [model, setModel] = useState([])
    const [year, setYear] = useState([])


    const [filteredModel, setFilteredModel] = useState([])
    const [filteredYear, setFilteredYear] = useState([])

    const [newCarData, setNewCarData] = useState({
        model: '',
        make: '',
        year: '',
        seats: 2,
        color: '',
        energeticClassification: 'B'
    })


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



    const handleInput = () => {


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
            <h2>Create car</h2>
            <Form onSubmit={handleInput}>
                <Form.Group className="mb-3" controlId="carMake">
                    <Form.Label>Make</Form.Label>
                    <Select
                        options={uniqueCarsMake.map(elm => ({ label: elm, value: elm }))}
                        onChange={handleMakeValue}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="carModel">
                    <Form.Label>Model</Form.Label>
                    <Select
                        options={uniqueCarsModel.map(elm => ({ label: elm, value: elm }))}
                        onChange={handleModelValue}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="carYear">
                    <Form.Label>Year</Form.Label>
                    <Select
                        options={uniqueCarsYear.map(elm => ({ label: elm, value: elm }))}
                        onChange={handleYearValue}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Seats">
                    <Form.Label>Seats</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>

                <>
                    <Form.Label htmlFor="color">Color</Form.Label>
                    <Form.Control
                        type="color"
                        id="color"
                        defaultValue="#563d7c"
                        title="Choose your color"
                    />
                </>


            </Form>

        </>
    )
}

export default CreateCarForm