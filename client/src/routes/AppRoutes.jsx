import { Routes, Route } from "react-router-dom"
import LoginForm from "../components/LogInForm/LogInForm"
import SignupForm from "../components/SignUpForm/SignUpForm"
import HomePage from "../pages/HomePage/HomePage"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/log-in' element={<LoginForm />} />
            <Route path='/sign-up' element={<SignupForm />} />
            <Route path="/*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes