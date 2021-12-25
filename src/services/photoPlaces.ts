export default async function getPhotosPlaces(therm:string) {

    return await fetch(`https://google-image-search1.p.rapidapi.com/?keyword=${therm}&max=10`, {
         "method": "GET",
         "headers": {
             "x-rapidapi-host": "google-image-search1.p.rapidapi.com",
             "x-rapidapi-key": `${process.env.NEXT_PUBLIC_APP_API_PHOTOS_KEY}`
         }
     })
    
 
 }