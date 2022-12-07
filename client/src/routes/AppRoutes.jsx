import { Routes, Route } from "react-router-dom"
import AddTrip from "../pages/AddTrip/AddTrip"
import PrivateRoute from "./PrivateRoutes"
import HomePage from "../pages/HomePage/HomePage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trip/add" element={<AddTrip />}></Route>
            <Route element={<PrivateRoute />}>
                <Route path="/user/profile" element={<ProfilePage />} />
            </Route>
            <Route path="/*" element={<h1>404</h1>} />

        </Routes>
    )
}

export default AppRoutes