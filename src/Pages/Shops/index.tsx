import React from 'react';
import { useSearchParams } from "react-router-dom";
import { Button } from '@tablecheck/tablekit-button';
import { ShopContext, ShopContextInterface } from '../../context/context';
import { getShopResults, getCitySearch } from '../../services/services';
import { Modal } from '../../Common/Modal';
import { LocationInterface, ShopInterface } from '../../Interfaces/interfaces';
import { ShopCard, ShopImage, ShopTitle, NoImage, ShopList } from './styles';

export const Shops: React.FC = () => {
    const [searchParams] = useSearchParams();
    const term = searchParams.get("term") || '';

    const [selectedShop, setSelectedShop] = React.useState<ShopInterface>();
    const [shops, setShops] = React.useState([]);
    const { selectedLocation } = React.useContext(ShopContext) as ShopContextInterface;

    const [showModal, setShowModal] = React.useState(false);
    const showModalHandler = (shop: ShopInterface) => {
        setShowModal(true);
        setSelectedShop(shop)
    }

    const hideModalHandler = () => setShowModal(false);

    React.useEffect(() => {
        const handleTermSearch = async () => {
            if (!term) return;

            const locations = await getCitySearch(term);
            const exactLocation = locations.find((location: LocationInterface) => location.text === term);
            const { lat, lon } = exactLocation;
            const shops = await getShopResults(lat, lon);
            setShops(shops)
        }

        const handleSearchInput = async () => {
            if (!selectedLocation) return;

            const { lat, lon } = selectedLocation;
            const shops = await getShopResults(lat, lon);
            setShops(shops);
        }

        !selectedLocation ? handleTermSearch() : handleSearchInput();
    }, [selectedLocation]);

    return (
        <>
            <ShopList>
                {shops.map((shop: ShopInterface) => {
                    return (
                        <ShopCard key={shop.id}>
                        <ShopTitle>{shop.name[1]}</ShopTitle>
                        {shop.searchImage ?
                            <ShopImage src={shop.searchImage} /> :
                            <NoImage src="https://img.icons8.com/ios-glyphs/512/no-image.png" />}
                        <Button shouldFitContainer={true} onClick={() => showModalHandler(shop)}>Description</Button>
                        </ShopCard>
                    )
                })}
            </ShopList>
            {
                showModal && selectedShop && <Modal selectedShop={selectedShop} hideModalHandler={hideModalHandler} />
            }
        </>
    )
}