import { Box, Typography, Button } from "@mui/material";
import ImagePlaces from "./PhotoPlaces";


const Maps = ({place}) =>  {

    const handleDelete = () => {

        const arr = JSON.parse(localStorage.getItem('USER_PLACES')) || [];
        const arrFiltered = arr.filter((item) => item.title !== place.title);
        if(arr.length > 1) {

            localStorage.setItem('USER_PLACES', JSON.stringify(arrFiltered));
            window.location.reload();
        } else {
            localStorage.getItem('USER_PLACES') && localStorage.removeItem('USER_PLACES');
            window.location.reload();
        }
       console.log(arrFiltered)
    }

    return (
        <Box maxWidth='sm' sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '5rem', backgroundColor: 'lightgray', padding: '1rem', border: '1px solid black'}}>
            <Typography variant="h5">{place.therm.toUpperCase()}</Typography>
            <iframe
                className="frame-Maps"
                title="place"
                loading="lazy"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_API_KEY}
                &q=${place.therm}`}
                ></iframe>
            {place.src && <ImagePlaces src={place.src} alt={place.title} />} 
            {window.location.pathname === "/lista" && <Button variant="contained" color="error" onClick={handleDelete}>Excluir</Button>}
        </Box>

    );
  }

  export default Maps;
  