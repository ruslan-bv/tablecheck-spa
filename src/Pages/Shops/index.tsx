import React from 'react';
import { useSearchParams } from "react-router-dom";
import { ShopContext, ShopContextInterface } from '../../context/context';
import { getShopResults, getCitySearch } from '../../services/services';
import { ShopCard, ShopImage, ShopTitle, ShopButton } from '../Home/styles';

export const Shops: React.FC = () => {
    const [searchParams] = useSearchParams();
    const term = searchParams.get("term") || '';

    const [shops, setShops] = React.useState([]);
    const { selectedLocation } = React.useContext(ShopContext) as ShopContextInterface;

    React.useEffect(() => {
        const handleTermSearch = async () => {
            const { locations } = await getCitySearch(term);
            const exactLocation = locations.find((location: any) => location.text === term);
            const { payload : { geo } } = exactLocation;
            const { shops } = await getShopResults(geo);
            setShops(shops)
        }

        const handleSearchInput = async () => {
            const { payload : { geo } } = selectedLocation;
            const { shops } = await getShopResults(geo);
            setShops(shops);
        }

        !selectedLocation ? handleTermSearch() : handleSearchInput();
    }, [selectedLocation]);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap'}}>
            {shops.map((shop: any, index) => {
            return (
                <ShopCard>
                <ShopTitle>{shop.name[0]}</ShopTitle>
                <ShopImage src={shop.search_image} />
                <ShopButton>Description</ShopButton>
                </ShopCard>
            )
            })}
        </div>
    )
}