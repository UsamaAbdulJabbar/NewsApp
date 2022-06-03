import { Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
export default function CompleteNews() {
    const location = useLocation();
    const [completeNew, setCompleteNews] = useState({});
    useEffect(() => {
        console.log(location.state);
        setCompleteNews(location.state)
    }, [])


    return (
        <>
            {/* <Box
                        onClick={() => GoToNews(e)}
                        textAlign="left"
                        sx={{ marginBottom: 5, boxShadow: "0 10px 10px rgba(0,0,0,.2)" }}>
                        <Box sx={{ display: "flex", justifyContent: "start" }} >
                            <img width="200px" src={e.urlToImage} alt="new image" />
                            <Typography variant='h4'>{e.title}</Typography>

                        </Box>
                        <Typography >{e.description}</Typography>
                        <Typography sx={{ fontSize: "1.3rem", fontWeight: "bold" }} >Published On :{e.publishedAt}</Typography>

                    </Box> */}



            <Box sx={{ marginBottom: 5, boxShadow: "0 10px 10px rgba(0,0,0,.2)" }}>
                    

            <img src={completeNew.urlToImage} width="50%" />
            <Typography variant="h1"> {completeNew.title} </Typography>
            <Typography variant="h3"> {completeNew.description} </Typography>
            <Typography variant="h3"> {completeNew.author} </Typography>
            <Typography variant="h3"> {completeNew.content} </Typography>
            <Typography variant="h3" sx={{  fontWeight: "bold"}}> Published On : {completeNew.publishedAt} </Typography>

            </Box>
        </>


    )
}
