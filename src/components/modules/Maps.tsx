import ImagePlaces from "./PhotoPlaces";

const Maps = ({place}) =>  {
console.log(place)
    return (
        <div className="container">
            <h2 className="therm">{place.therm.toUpperCase()}</h2>
            <iframe
                className="frame-Maps"
                title="place"
                loading="lazy"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_API_KEY}
                &q=${place.therm}`}
                ></iframe>
            {place.src && <ImagePlaces src={place.src} alt={place.title} />} 
        </div>

    );
  }

  export default Maps;
  