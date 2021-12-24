import BottomNavigation from '../components/shared/BottomNavigation'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='body'> 
      <Component {...pageProps} />
      <BottomNavigation />
    </div>
  )
}

export default MyApp
