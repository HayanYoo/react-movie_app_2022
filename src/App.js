import React, {useEffect, useState} from "react";
import Todo from "./components/Todo.js";
import Coin from "./components/Coin.js";
import Movie from "./components/Movie";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    const BASE_NAME = "/react-movie_app_2022"
    return (
        <Router basename={BASE_NAME}>
            <Routes>
                <Route path='/movie/:id' element={<Detail/>}/>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </Router>)
        ;
}


export default App;
