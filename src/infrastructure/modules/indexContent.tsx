import { Avatar, Container, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AnimationWalk from "../../components/shared/Animation";
import { IndexContentProps } from "../interfaces/modules";
import BottomNavigationFooter from "src/components/shared/BottomNavigationFooter";



const IndexContent = ({ animation, handleAnimation }: IndexContentProps) => {
    return (
        <Container sx={{ width: '100vw' }} >
            <Head>
                <title>No rolê</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {animation ?
              <Container maxWidth='lg' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100vw', padding: '2rem' }}>
                    <AnimationWalk />
                    <Typography variant="h4">Carregando...</Typography>
                </Container>
                :
                <>
                    <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}  >

                        <>
                            <Box sx={{ margin: '1rem' }}  >
                                <img width='300' height='200' data-testid="home__banner" src="https://images.nappy.co/uploads/large/high-res-0325-21592075363xkaufglncvaxh69vd9ouyxi4pr9votdqqrea5wtakcfqxaugjvdveh7oaaz0cwecvycbbs14l45zzpmbq3tfezqqgstlspmyyu7a.jpg?auto=format&fm=jpg&w=1280&q=75" alt="pessoa com skate" loading='lazy' />
                                <Typography variant='h4' component='h2' margin={2} data-jest="home__title">Qual o seu rolê?</Typography>
                            </Box>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem>
                                    <ListItemAvatar >
                                        <Avatar sx={{ backgroundColor: "gray" }}>
                                            <LocationOnIcon data-testid="iconLocation" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Marque os lugares que já conheceu - Em breve" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar onClick={handleAnimation}>
                                        <Avatar sx={{ backgroundColor: "black" }}>
                                            <AddLocationIcon data-testid="iconAddLocation" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Marque os lugares que quer conhecer" />
                                </ListItem>
                            </List>
                        </>


                    </Container>
                </>
            }

            <BottomNavigationFooter openAnimation={handleAnimation} />
        </Container>
    )
};

export default IndexContent;