import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DashboardLayout from './dashboardLayout';

export default function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState(false);
    const location = useLocation();

    //useEffect hook use here for rendering conditions
    //it render if user = true
    useEffect(()=>{
        if(location.state && location.state.user){
            
            navigate("/")
        }
        else{
            navigate("/login")
        }
    },[]);
    

    return (
        <>
            <DashboardLayout/>


        </>
    )
}
