import { createContext, useState } from "react";

export interface BuscarContextProps {
    therm: string,
    setTherm: (newValue: string) => void;
}

export const BuscarContext = createContext<BuscarContextProps>(undefined);

BuscarContext.displayName = "Buscar";

export const BuscarProvider = (props) => {

    const [therm, setTherm] = useState<BuscarContextProps['therm']>('');

    return (
        <BuscarContext.Provider value={{therm, setTherm}}>
                {props.children}
        </BuscarContext.Provider>
    )
}