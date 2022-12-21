import * as React from 'react';

export interface ShopContextInterface {
    selectedLocation: any;
    setSelectedLocation: any;
}

export const ShopContext = React.createContext<ShopContextInterface | null>(null);

const ShopContextProvider:React.FC<any> = ({ children }) => {
    const [selectedLocation, setSelectedLocation] = React.useState<any>();

    const value = { selectedLocation, setSelectedLocation };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>

    )
}

export default ShopContextProvider;