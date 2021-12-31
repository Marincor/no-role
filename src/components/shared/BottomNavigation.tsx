import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useRouter } from 'next/router';
import { Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';

const Footer = ({OpenAnimation}) => {
    const router = useRouter();
  
    const handleRoute = async (route) => {
        OpenAnimation(true);
        setTimeout(() => {
            router.push(route);
            OpenAnimation(false);
        }, 2000);
        
    }
    
 const [value, setValue] = React.useState('Início');

 React.useEffect(()=>{
    setPathNAme();

 }, [])

 const setPathNAme = () => {
    switch(window.location.pathname) {
        case '/': setValue('Início');
        break;
        case '/buscar': setValue('Buscar');
        break;
        case '/lista': setValue('Lista');
        break;
        case '/sobre': setValue('Sobre');
        break;
        default: setValue('Início');
    }
 }


  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
      <Paper  sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center' }} elevation={4}>
                <BottomNavigation sx={{ width: '100%', backgroundColor: 'rgb(98,6,35)' }} value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Início"
                    value="Início"
                    onClick={()=>{handleRoute('/')}}
                    icon={<HomeIcon 
                        sx={{color: 'white'}}
                        />}
                    />
                <BottomNavigationAction
                    label="Buscar"
                    value="Buscar"
                    onClick={()=>{handleRoute('/buscar')}}
                    icon={<SearchIcon    sx={{color: 'white'}} />}
                    />
                <BottomNavigationAction
                    label="Lista"
                    value="Lista"
                    onClick={()=>{handleRoute('/lista')}}
                    icon={<FavoriteIcon    sx={{color: 'white'}} />}
                    />
                <BottomNavigationAction 
                label="Sobre" 
                value="Sobre" 
                onClick={()=>{handleRoute('/sobre')}}
                icon={<InfoIcon    sx={{color: 'white'}} />} />
                </BottomNavigation>
        </Paper>
  );
}

export default Footer;