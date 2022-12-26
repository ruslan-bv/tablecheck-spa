export const getCitySearch = async (query: string) => {
    try {
        const url = `https://staging-snap.tablecheck.com/v2/autocomplete?locale=en&shop_universe_id=57e0b91744aea12988000001&text=${query}`;
        const { locations } = await fetch(url).then(res => res.json());

        const formattedLocations = locations.map((location: any) => {
            return {
                    text: location.text,
                    lat: location.payload.geo.lat,
                    lon: location.payload.geo.lon
                };
        })

        return formattedLocations;
    } catch (err) {
        console.log(err);
    }
}

export const getShopResults = async (lat: number, lon: number) => {
    try {
        const url = `https://staging-snap.tablecheck.com/v2/shop_search?geo_latitude=${lat}&geo_longitude=${lon}&shop_universe_id=57e0b91744aea12988000001&locale=en&per_page=50`;
        const { shops } = await fetch(url).then(res => res.json());

        const formattedShops = shops.map((shop: any) => {
            return {
                id: shop._id,
                name: shop.name,
                searchImage: shop.search_image,
                cuisines: shop.cuisines,
                serviceModes: shop.service_modes,
                tags: shop.tags
            }
        })

        return formattedShops;
    } catch (err) {
        console.log(err)
    }
} 