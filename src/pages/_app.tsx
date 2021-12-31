import { Container, Typography } from '@mui/material'
import { useState } from 'react'
import AnimationWalk from '../components/shared/Animation'
import Footer from '../components/shared/BottomNavigation'
import { BuscarProvider } from '../store/buscar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [animation, OpenAnimation] = useState(false)

  return (
    <Container sx={{display: 'flex', justifyContent: 'center'}}> 
      <BuscarProvider>
        {animation? 
        <Container maxWidth="sm">
          <AnimationWalk /> 
          <Typography variant="h4">Carregando...</Typography>
        </Container>
          :
        <Component {...pageProps} />
        }
      </BuscarProvider>
      <Footer OpenAnimation={OpenAnimation} />
    </Container>
  )
}

export default MyApp
