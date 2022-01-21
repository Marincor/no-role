import { useEffect, useState } from "react";
import ListContent from "../infrastructure/modules/listaContent";

const List = () => {
  const [loading, setLoading] = useState(false);
  const [place, setPlace] = useState([]);
  const [animation, openAnimation] = useState(false);

  useEffect(()=>{
    setLoading(true)
    const currentPlaces = JSON.parse(localStorage.getItem('USER_PLACES'))
    setPlace(currentPlaces);
  
    setTimeout(()=>{
      setLoading(false)

    },2000 )

  },[])

    return ( <ListContent place={place} loading={loading} animation={animation} openAnimation={openAnimation}/> )
}

export default List;