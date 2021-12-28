import { Box, Container, Typography } from "@mui/material";
import ImagePlaces from "./PhotoPlaces";


const Maps = ({place}) =>  {
console.log(place)
    return (
        <Box maxWidth='sm' sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem', backgroundColor: 'lightgray', padding: '1rem', border: '1px solid black'}}>
            <Typography variant="h5">{place.therm.toUpperCase()}</Typography>
            <iframe
                className="frame-Maps"
                title="place"
                loading="lazy"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_API_KEY}
                &q=${place.therm}`}
                ></iframe>
            {place.src && <ImagePlaces src={place.src} alt={place.title} />} 
        </Box>

    );
  }

  export default Maps;
  