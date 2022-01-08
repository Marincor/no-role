import { UserPlaces } from "../../infrastructure/interfaces/shared/userPlaces";



const ImagePlaces= ({src, title}: UserPlaces) => {
    return <img src={src} alt={title} loading='lazy'  width="100%" height="200px" style={{marginTop: '1rem', marginBottom: '1rem'}} />;
    
  }

export default ImagePlaces;