import { Typography } from "@mui/material";
import Head from "next/head"

const About = () => {


    return (
        <div >
        <Head>
          <title>No rolê - Sobre</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className='container column'>
           
              <Typography className='title' variant="h5" component="h2">Sobre</Typography>
              <Typography marginTop={10}>WebApp criado por:  
                <a href="https://github.com/Marincor" target='_blank'>Marincor</a> 
              </Typography>
             
        </main>
      </div>
    )
}

export default About;