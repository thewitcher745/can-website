import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

import './App.scss'
import Footer from "./components/Footer/Footer.tsx";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}

export default App
