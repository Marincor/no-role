import HomeIcon from '../../../public/assets/img/home.svg';
import SearchIcon from '../../../public/assets/img/search.svg'; 
import ListIcon from '../../../public/assets/img/list.svg';
import AboutIcon from '../../../public/assets/img/about.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

const BottomNavigation = () => {
    const router = useRouter();
    const handleRoute = async (route) => {
   
        router.push(route);
    }
    return(
        <footer className="footer">
                <ul className="list">
                    <li className="items" onClick={()=>{handleRoute('/')}}>
                        <Image src={HomeIcon} alt="início" width={40} height={40}/>
                        <p>Início</p>
                    </li>
                    <li className="items" onClick={()=>{handleRoute('/buscar')}}>
                         <Image src={SearchIcon} alt="buscar" width={40} height={40}/>
                        <p>Buscar</p>
                    </li>
                    <li className="items lm" onClick={()=>{handleRoute('/lista')}}>
                        <Image src={ListIcon} alt="lista" width={40} height={40}/>
                        <p className='text lm'>Lista</p>
                    </li>
                    <li className="items" onClick={()=>{handleRoute('/sobre')}}>
                        <Image src={AboutIcon} alt="" width={40} height={40}/>
                        <p>Sobre</p>
                    </li>
                </ul>
        </footer>
    )
}

export default BottomNavigation;