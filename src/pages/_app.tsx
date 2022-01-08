import { Container, Typography } from '@mui/material'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { useRouter, NextRouter } from 'next/router'
import { useEffect, useState } from 'react'
import AnimationWalk from '../components/shared/Animation'
import Footer from '../components/shared/BottomNavigation'
import { AnimationProps } from '../infrastructure/interfaces/shared/animation'
import { BuscarProvider } from '../store/buscar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {

  const [animation, openAnimation] = useState<AnimationProps['animation']>(false);
  const router: NextRouter = useRouter();

  const validateRoute = () => {
    if(window.location.pathname !== "/") {
        router.push("/");
    }
  };
  
  useEffect(()=>{
    validateRoute();
  }, [])

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      <BuscarProvider>
        {animation ?
          <Container maxWidth="sm">
            <AnimationWalk />
            <Typography variant="h4">Carregando...</Typography>
          </Container>
          :
          <Component {...pageProps} />
        }
      </BuscarProvider>
      <Footer openAnimation={openAnimation} />
    </Container>
  )
}

export default MyApp
