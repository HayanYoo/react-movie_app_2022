import React, {useEffect, useState} from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Hooks from "./routes/Hooks";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


function App() {
    const BASE_NAME = "/react-movie_app_2022"
    return (
        <Router basename={BASE_NAME}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/movie/:id' element={<Detail/>}/>
                <Route path='/hooks' element={<Hooks/>}/>
            </Routes>
        </Router>)
        ;
}


export default App;
