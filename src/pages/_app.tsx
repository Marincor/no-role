import { Container } from '@mui/material'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { useEffect } from 'react'
import { BuscarProvider } from '../store/buscar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {



  const validateRoute = () => {
    if(window.location.pathname !== "/") {
        window.location.href = "/"
    }
  };
  
  useEffect(()=>{
    validateRoute();
  }, [])

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      <BuscarProvider>
          <Component {...pageProps} />
      </BuscarProvider>
    </Container>
  )
}

export default MyApp
