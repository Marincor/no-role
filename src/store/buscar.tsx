import { createContext, JSXElementConstructor, useState } from "react";

export const BuscarContext = createContext(null);

BuscarContext.displayName = "Buscar";

export const BuscarProvider = (props) => {

    const [therm, setTherm] = useState<string>('');

    return (
        <BuscarContext.Provider value={{therm, setTherm}}>
                {props.children}
        </BuscarContext.Provider>
    )
}