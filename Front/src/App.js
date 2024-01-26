import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import FicheClient from "./pages/ficheClient";
import Emprunt from "./pages/Emprunt";
import PageComponents from "./pages/page_components";
import PageEmprunt from "./pages/page_emprunt";
import Machines from "./pages/machines";
import Login from "./pages/Login"
import Signup from "./pages/SignUp"
import ValidateBooking from "./pages/ValidateBooking"

function App() {

    return (
        <div>
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/pages/home" element={<Home />} />
                <Route path="/pages/signup" element={<Signup />} />
                <Route path="/pages/ficheClient" element={<FicheClient/>} />
                <Route path="/pages/Emprunt" element={<Emprunt/>} />
                <Route path="/pages/ValidateBooking" element={<ValidateBooking/>} />
                <Route path="/pages/pages_components" element={<PageComponents/>} />
                <Route path="/pages/pages_emprunt" element={<PageEmprunt/>} />
                <Route path="/pages/machines" element={<Machines/>} />
                <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>
            </Routes>
        </Router>
        </div>
    );
}

export default App;