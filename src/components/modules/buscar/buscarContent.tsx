import { Alert, Button, Card, CardActions, CircularProgress, Container, Snackbar, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import { BuscarContentProps } from "../../../infrastructure/interfaces/modules/buscar";
import Maps from "../../shared/Maps";

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
    handleSearch }: BuscarContentProps ) => {

    return (
        <div >
            <Head>
                <title>No rolê - Buscar</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth='lg' sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100vw', padding: '2rem'}}>
                <Typography variant="h5" component="h2">Encontre o rolê perfeito</Typography>
                <form className="form" >
                    <TextField id="outlined-basic" label="Lugar" fullWidth variant="outlined" margin='normal' onChange={(e) => { handleChange(e.target.value) }} />
                    <Button type="submit" variant='contained' fullWidth color="info" sx={{ backgroundColor: "black" }} onClick={(e) => { e.preventDefault(); handleSearch() }}>Buscar</Button>
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
                <Box maxWidth="1000%" height='auto' sx={{ marginBottom: '58px', marginTop: '10px' }}>
                    <Card sx={{ maxWidth: 345, marginLeft: 'auto', marginRight: 'auto' }}>
                        <Maps place={place} />
                        <CardActions>
                            <Button size='small' variant="contained" sx={{ backgroundColor: 'rgb(98,6,35)' }} onClick={handleList}>Salvar</Button>
                        </CardActions>
                    </Card>
                </Box>

                }
                <Snackbar open={sucess} autoHideDuration={6000} onClose={handleCloseSuccess}>
                    <Alert onClose={handleCloseSuccess} severity='success' sx={{ width: '100%', marginBottom: '80%' }}>
                        Lugar salvo com sucesso!
                    </Alert>
                </Snackbar>
            </Container>
        </div>
    )
};

export default BuscarContent;