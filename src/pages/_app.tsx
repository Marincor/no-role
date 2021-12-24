import BottomNavigation from '../components/shared/BottomNavigation'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <> 
      <Component {...pageProps} />
      <BottomNavigation />
    </>
  )
}

export default MyApp
