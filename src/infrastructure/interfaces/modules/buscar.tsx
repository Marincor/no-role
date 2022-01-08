export interface BuscarContentProps {
    error: boolean,
    handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void,
    errorMessage: string,
    loading: boolean,
    modalMapOpen: boolean,
    place: { 
        src: string, 
        title: string, 
        therm: string 
    },
    sucess: boolean,
    handleCloseSuccess: (event?: React.SyntheticEvent | Event, reason?: string) => void,
    handleList: () => void,
    handleChange: (newValue: string) => void,
    handleSearch: () => void
};

