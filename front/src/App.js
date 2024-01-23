import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from './pages/home';
import Page1 from "./pages/page1";

function App() {

    return (
        <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/pages/pages1" element={<Page1/>} />
                <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>
            </Routes>
        </Router>
        </div>
    );
}

export default App;