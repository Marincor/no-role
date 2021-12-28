import { Container, Typography } from "@mui/material";
import Head from "next/head"
import { useEffect, useState } from "react";
import Maps from "../components/shared/Maps";

const List = () => {
  const [loading, setLoading] = useState(false);
  const [place, setPlace] = useState([]);

  useEffect(()=>{
    setLoading(true)
    const currentPlaces = JSON.parse(localStorage.getItem('USER_PLACES'))
    setPlace(currentPlaces);
  
    setTimeout(()=>{
      setLoading(false)

    },2000 )

  },[])
console.log(place)

    return (
        <div >
        <Head>
          <title>No rolê - Lista</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"/>
        </Head>
        <Container>
           
              <Typography color="secondary"  >Sua lista</Typography>
              {!loading && place.map((place) => {

                  return(
                      <Maps place={place} key={place.title}/>
                  )
              })}
             
        </Container>
      </div>
    )
}

export default List;