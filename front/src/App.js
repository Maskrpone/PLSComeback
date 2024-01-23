import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Page1 from "./pages/page1";
import PageComponents from "./pages/page_components";

function App() {

    return (
        <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/pages/pages1" element={<Page1/>} />
                <Route path="/pages/pages_components" element={<PageComponents/>} />
                <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>
            </Routes>
        </Router>
        </div>
    );
}

export default App;