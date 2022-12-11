import { Routes, Route } from "react-router-dom"
import AddTripPage from "../pages/AddTripPage/AddTripPage"
import PrivateRoute from "./PrivateRoutes"
import HomePage from "../pages/HomePage/HomePage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import SearchTripPage from "../pages/SearchTripPage/SearchTripPage"
import TripDetails from "../components/TripDetails/TripDetails"
import CreateCarForm from "../components/CreateCarForm/CreateCarForm"
import EditCarForm from "../components/EditCarForm/EditCarForm"
const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trip/add" element={<AddTripPage />} />
            <Route path='/trips/:tripID' element={<SearchTripPage />} />
            <Route path="/createCar" element={<CreateCarForm />}></Route>
            <Route path="/editCar" element={<EditCarForm />}></Route>

            <Route element={<PrivateRoute />}>
                <Route path="/user/profile" element={<ProfilePage />} />
            </Route>
            <Route path="/*" element={<h1>404</h1>} />

        </Routes>
    )
}

export default AppRoutes