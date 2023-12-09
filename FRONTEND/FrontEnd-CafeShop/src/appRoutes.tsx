import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/login";
import CreateUser from "./pages/createUser";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/novo-usuario" element={<CreateUser />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes