import { createContext, FC, useState } from "react";

export interface BuscarContextProps {
    therm: string,
    setTherm: (newValue: string) => void;
}

export const BuscarContext = createContext<BuscarContextProps>(undefined);

BuscarContext.displayName = "Buscar";

export const BuscarProvider: FC = ({children}) => {

    const [therm, setTherm] = useState<BuscarContextProps['therm']>('');

    return (
        <BuscarContext.Provider value={{therm, setTherm}}>
                {children}
        </BuscarContext.Provider>
    )
}