import * as React from 'react';
import { LocationInterface } from '../Interfaces/interfaces';

export interface ShopContextInterface {
    selectedLocation: LocationInterface | undefined;
    setSelectedLocation: any;
}


export const ShopContext = React.createContext<ShopContextInterface | undefined>(undefined);

const ShopContextProvider:React.FC<any> = ({ children }) => {
    const [selectedLocation, setSelectedLocation] = React.useState<LocationInterface | undefined>();

    const value = { selectedLocation, setSelectedLocation };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>

    )
}

export default ShopContextProvider;