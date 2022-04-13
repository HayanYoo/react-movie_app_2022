import React, {useEffect, useState} from "react";
import Home from "./routes/Home";
import GHome from "./graphql/routes/Home";
import GDetail from "./graphql/routes/Detail";
import Detail from "./routes/Detail";
import Hooks from "./routes/Hooks";
import AxiosView from "./routes/AxiosView";

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
                <Route path='/axios' element={<AxiosView/>}/>
                <Route path='/graphql/home' element={<GHome/>}/>
                <Route path='/graphql/:id' element={<GDetail/>}/>
            </Routes>
        </Router>)
        ;
}


export default App;
