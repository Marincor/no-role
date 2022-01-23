import { Container, Typography } from "@mui/material";
import Head from "next/head";
import AnimationWalk from "src/components/shared/Animation";
import Footer from "src/components/shared/BottomNavigationFooter";
import { AnimationProps } from "../interfaces/shared/animation";

const AboutContent = ({animation, openAnimation}: AnimationProps) => {

    return (
        <div >
            <Head>
                <title>No rolê - Sobre</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {
                animation?
                <Container maxWidth='lg' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100vw', padding: '2rem' }}>
                    <AnimationWalk />
                    <Typography variant="h4">Carregando...</Typography>
                </Container> :
                <>
                 <main className='container column'>
                <Container sx={{ display: 'flex', textAlign: 'center', flexDirection: 'column' }}>
                    <Typography className='title' variant="h5" component="h2">Sobre</Typography>
                    <Typography marginTop={10}>WebApp criado por:
                        <a href="https://github.com/Marincor" target='_blank' rel='noreferrer'>Marincor</a>
                    </Typography>
                </Container>
            </main>
                </>
            }
           <Footer openAnimation={openAnimation} />
        </div>
    )
};

export default AboutContent;