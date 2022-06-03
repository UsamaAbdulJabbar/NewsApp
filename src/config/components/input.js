import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function SMInput(props) {
    const {label,type} = props
  return (
        <>
        <TextField autoComplete='off' sx={{backgroundColor:"white" , width:"350px", outline:"none"}} id="outlined-basic" label={label} type={type} variant="filled" />
        
        
        
        </>
  )
}


