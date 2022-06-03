import { Box, Typography } from '@mui/material'
import React from 'react'
import './login.css';
import { useNavigate } from 'react-router-dom'
import SMButton from '../config/components/button'
import SMInput from '../config/components/input'
import { Grid } from '@mui/material';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

export default function Login() {

    const navigate = useNavigate();

    const UserLogin = () => {
        console.log("user Click Login")

        navigate("/",
            {
                state: {
                    user: true
                }
            });
    };
    return (
        <>
            <div className='newsAppBar' style={{marginTop:"50px", backgroundColor:"lightyellow"}}>
                <Box sx={{padding:"10px"}}>
                <Typography variant="h3">News App</Typography>
                </Box>
            </div>
            <div className='flexDiv'>
                
                <Grid item sm={12} md={12} lg={12}>
                    <div className='whiteCoverImg'>

                    </div>


                </Grid>


                <Grid item sm={12} md={12} lg={12}>
                    <div className='whiteCover'>

                        <Box sx={{ padding: "20px" }}>

                            <Box sx={{ padding: "25px" }}>
                                <Typography variant='h4' sx={{}}>Login {<LoginRoundedIcon />} </Typography>

                                <hr></hr>
                            </Box>

                            <Box className='EmailField' sx={{ padding: "10px", margin:"30px" }}>
                                <SMInput label="Email" type="email" />
                            </Box>

                            <Box className='PasswordField' sx={{ padding: "10px", margin:"30px"  }}>
                                <SMInput label="Password" type="password" />
                            </Box>

                            <Box sx={{ padding: "10px" }}>
                                <SMButton className="LoginBtn" onClick={UserLogin} label="Login" />
                            </Box>
                        </Box>
                    </div>


                </Grid>
            </div>

        </>
    )
}
