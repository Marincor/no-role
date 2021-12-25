import { createContext, JSXElementConstructor, useState } from "react";

export const BuscarContext = createContext(null);

BuscarContext.displayName = "Buscar";

export const BuscarProvider = (props) => {

    const [therm, setTherm] = useState<string>('');
    const [places, setPlaces] = useState([]);

    return (
        <BuscarContext.Provider value={{therm, setTherm, places, setPlaces}}>
                {props.children}
        </BuscarContext.Provider>
    )
}