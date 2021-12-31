

const ImagePlaces= ({src, alt}) => {



    return <img src={src} alt={alt} loading='lazy'  width="100%" height="200px" style={{marginTop: '1rem', marginBottom: '1rem'}} />;
    
  }

export default ImagePlaces;