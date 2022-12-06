import { Routes, Route } from "react-router-dom"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes