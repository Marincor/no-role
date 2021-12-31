import { useContext, useState } from "react";
import BuscarContent from "../components/modules/buscar/buscarContent";
import { BuscarContentProps } from "../infrastructure/interfaces/modules/buscar";
import getPhotosPlaces from "../services/photoPlaces";
import { BuscarContext, BuscarContextProps } from "../store/buscar";



const Search = () => {
  const { therm, setTherm } = useContext<BuscarContextProps>(BuscarContext);
  const [loading, setLoading] = useState<BuscarContentProps['loading']>(false);
  const [modalMapOpen, setModalMapOpen] = useState<BuscarContentProps['modalMapOpen']>(false);
  const [place, setPlace] = useState<BuscarContentProps['place']>({ src: '', title: '', therm: '' })
  const [error, setError] = useState<BuscarContentProps['error']>(false);
  const [sucess, setSucess] = useState<BuscarContentProps['sucess']>(false);
  const [errorMessage, setErrorMessage] = useState<BuscarContentProps['errorMessage']>('Informe o lugar desejado!')


//  close notification snackbar of error
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(false);
    setModalMapOpen(false);
  };

//  close notification snackbar of sucess
  const handleCloseSuccess = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setSucess(false);
    setModalMapOpen(false);
  };

  //handle inputs change search
  const handleChange = (newValue: string) => {
    setTherm(newValue)
  }

  //request
  const handleSearch = async () => {
    if (therm) {
      setLoading(true)
      try {
        const photo = await (await getPhotosPlaces(therm)).json();
        if (photo.message) {
          setLoading(false);
          setErrorMessage(photo.message);
          setError(true);
        } else {
          setPlace({ ...place, src: photo[0].image.url, title: photo[0].title, therm: therm })
        }
      } catch (error) {
          setErrorMessage(error.message);
          setError(true);
      }
      finally {
          setTimeout(() => {
            setLoading(false);
            !error && setModalMapOpen(true);
            document.querySelector('input').value = "";
        }, 2000)
      }
    } else {
        setError(true);
    }


  }

    //save list
  const handleList = () => {
    const currentPlace = JSON.parse(localStorage.getItem('USER_PLACES')) || [];
    if(currentPlace.find((item) => item.title === place.title)) {
        setErrorMessage("Esse lugar já consta em sua lista");
        setError(true);
    } else {
        currentPlace.push(place);
        localStorage.setItem('USER_PLACES', JSON.stringify(currentPlace));
        setSucess(true)
    }
  }

  return ( 
    <BuscarContent 
    error={error}
    handleClose={handleClose}
    errorMessage={errorMessage}
    loading={loading}
    modalMapOpen={modalMapOpen}
    place={place}
    sucess={sucess}
    handleCloseSuccess={handleCloseSuccess}
    handleList={handleList}
    handleChange={handleChange}
    handleSearch={handleSearch}
          /> 
  )
}

export default Search;