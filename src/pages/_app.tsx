import BottomNavigation from '../components/shared/BottomNavigation'
import { BuscarProvider } from '../store/buscar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='body'> 
      <BuscarProvider>
        <Component {...pageProps} />
      </BuscarProvider>
      <BottomNavigation />
    </div>
  )
}

export default MyApp
