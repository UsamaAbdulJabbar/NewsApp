import React from 'react'
import Button from '@mui/material/Button';



export default function SMButton(props) {
    const {label, onClick}  = props;
     return (
        <>

            <Button onClick={onClick} sx={{backgroundColor:"lightblue", width:"10rem", color:"black", fontSize:"1.3rem"}}  variant="contained">{label}</Button>

        </>
    )
}
