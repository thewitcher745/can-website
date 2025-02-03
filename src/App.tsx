import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

import './App.scss'

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </Router>
    )
}

export default App
