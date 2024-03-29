import { useEffect, useState } from "react";
import { ListContentProps } from "src/infrastructure/interfaces/modules/lista";
import ListContent from "../infrastructure/modules/listaContent";

const List = () => {
  const [loading, setLoading] = useState<ListContentProps['loading']>(false);
  const [place, setPlace] = useState<ListContentProps['place']>([]);
  const [animation, openAnimation] = useState<ListContentProps['animation']>(false);

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