import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";


function RoutingApp(){



    return(
        <>
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="*" element={<Dashboard/>}/>
            </Routes>
        </Router>
        
        </>
    )
}


export default RoutingApp;