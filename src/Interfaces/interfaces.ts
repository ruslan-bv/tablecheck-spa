export interface LocationInterface {
    text: string;
    lat: number;
    lon: number;
}

export interface ShopInterface {
    id: string;
    name: string[];
    cuisines: string[];
    searchImage: string;
    serviceModes: string[];
    tags: string[];
}

export interface ModalPropsInterface {
    selectedShop: ShopInterface;
    hideModalHandler: () => void;
}