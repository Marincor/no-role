import { Alert, Button, Card, CardActions, CircularProgress, Container, Snackbar, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import { BuscarContentProps } from "../interfaces/modules/buscar";
import Maps from "../../components/shared/Maps";
import Footer from "src/components/shared/BottomNavigationFooter";
import AnimationWalk from "src/components/shared/Animation";

const BuscarContent = ({
    error,
    handleClose,
    errorMessage,
    loading,
    modalMapOpen,
    place,
    sucess,
    handleCloseSuccess,
    handleList,
    handleChange,
    handleSearch,
    animation,
    openAnimation }: BuscarContentProps) => {

    return (
        <div >
            <Head>
                <title>No rolê - Buscar</title>
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
                    <Container maxWidth='lg' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100vw', padding: '2rem' }}>

                        <>
                            <Typography variant="h5" component="h2">Encontre o rolê perfeito</Typography>
                            <form className="form" >
                                <TextField id="outlined-basic" label="Lugar" data-testid="input" 
                                 inputProps={{ "data-testid": "input" }} 
                                aria-label="search-input" fullWidth variant="outlined" margin='normal' onChange={(e) => { handleChange(e.target.value) }} />
                                <Button type="submit"  data-testid="searchButton" variant='contained' fullWidth color="info" sx={{ backgroundColor: "black" }} onClick={(e) => { e.preventDefault(); handleSearch() }}>Buscar</Button>
                            </form>
                            <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="error" sx={{ width: '100%', marginBottom: '80%' }}>
                                    {errorMessage}
                                </Alert>
                            </Snackbar>
                            {
                                loading &&
                                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '40%' }}>
                                    <CircularProgress sx={{ color: 'rgb(98,6,35)' }} />
                                </Box>
                            }
                            {modalMapOpen &&
                                <Box maxWidth="1000%" height='auto' sx={{ marginBottom: '58px', marginTop: '10px' }} data-testid="box-content" >
                                    <Card sx={{ maxWidth: 345, marginLeft: 'auto', marginRight: 'auto' }}>
                                        <Maps therm={place.therm} src={place.src} title={place.title} isAList={false} />
                                        <CardActions>
                                            <Button size='small' variant="contained" sx={{ backgroundColor: 'rgb(98,6,35)' }} onClick={handleList}
                                          >Salvar</Button>
                                        </CardActions>
                                    </Card>
                                </Box>

                            }
                            <Snackbar open={sucess} autoHideDuration={6000} onClose={handleCloseSuccess}>
                                <Alert onClose={handleCloseSuccess} severity='success' sx={{ width: '100%', marginBottom: '80%' }}>
                                    Lugar salvo com sucesso!
                                </Alert>
                            </Snackbar>
                        </>
                    </Container>
                </>
            }

            <Footer openAnimation={openAnimation} />
        </div>
    )
};

export default BuscarContent;