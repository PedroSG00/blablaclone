import { Routes, Route } from "react-router-dom"
import AddTripPage from "../pages/AddTripPage/AddTripPage"
import PrivateRoute from "./PrivateRoutes"
import HomePage from "../pages/HomePage/HomePage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trip/add" element={<AddTripPage />}></Route>
            <Route element={<PrivateRoute />}>
                <Route path="/user/profile" element={<ProfilePage />} />
            </Route>
            <Route path="/*" element={<h1>404</h1>} />

        </Routes>
    )
}

export default AppRoutes