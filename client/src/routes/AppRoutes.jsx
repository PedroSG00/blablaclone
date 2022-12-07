import { Routes, Route } from "react-router-dom"
import PrivateRoute from "./PrivateRoutes"
import HomePage from "../pages/HomePage/HomePage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<h1>404</h1>} />
            <Route element={<PrivateRoute />}>
                <Route path='/user/profile' element={<ProfilePage />} />
            </Route>

        </Routes>
    )
}

export default AppRoutes