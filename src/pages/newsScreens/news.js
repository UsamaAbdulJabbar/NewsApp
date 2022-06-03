import { Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom';

export default function News() {
    //Your API key is: 6622e30d9c684462ae34ce8b659aabc9
    //https://newsapi.org/v2/everything?q=tesla&from=2022-05-02&sortBy=publishedAt&apiKey=6622e30d9c684462ae34ce8b659aabc9

    const [articles, setArticles] = useState([]);

    const navigate = useNavigate();
    const getNews = () => {


        let api = "https://newsapi.org/v2/everything?q=tesla&from=2022-05-03&sortBy=publishedAt&apiKey=6622e30d9c684462ae34ce8b659aabc9";

        axios.get(api).then((success) => {
            console.log(success);
            setArticles(success.data.articles)
        }).catch((error) => {
            console.log(error);
        })
    };
    const GoToNews = (item) => {
        navigate("/completeNews", {
            state: item,
        });
        console.log(item)
    };

    useEffect(() => {
        getNews();

    }, [])



    return (
        <>
            <Box >

                <Typography variant="h3" >News</Typography>
                {articles.map((e, i) => (
                    <Box
                        onClick={() => GoToNews(e)}
                        textAlign="left"
                        sx={{ marginBottom: 5, boxShadow: "0 10px 10px rgba(0,0,0,.2)" }}>
                        <Box sx={{ display: "flex", justifyContent: "start" }} >
                            <img width="200px" src={e.urlToImage} alt="new image" />
                            <Typography variant='h4'>{e.title}</Typography>

                        </Box>
                        <Typography >{e.description}</Typography>
                        <Typography sx={{ fontSize: "1.3rem", fontWeight: "bold" }} >Published On :{e.publishedAt}</Typography>

                    </Box>
                ))}

            </Box>

        </>

    )
}
