import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useRouter } from 'next/router';
import { Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';

const Footer = () => {
    const router = useRouter();
  
    const handleRoute = async (route) => {
   
        router.push(route);
    }
    
                  {/* <ul className="list">
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
                  </ul> */} 
                  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
      <Paper  sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center' }} elevation={4}>

                <BottomNavigation sx={{ width: 380, backgroundColor: 'rgb(98,6,35)' }} value={value} onChange={handleChange}>
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