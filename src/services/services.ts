export const getCitySearch = async (query: string) => {
    try {
        const url = `https://staging-snap.tablecheck.com/v2/autocomplete?locale=en&shop_universe_id=57e0b91744aea12988000001&text=${query}`;

        const result = await fetch(url).then(res => res.json());
        return result;
    } catch (err) {
        console.log(err);
    }
}

export const getShopResults = async (geo: any) => {
    try {
        const { lat, lon } = geo;
        const url = `https://staging-snap.tablecheck.com/v2/shop_search?geo_latitude=${lat}&geo_longitude=${lon}&shop_universe_id=57e0b91744aea12988000001&locale=en&per_page=50`;
        
        const result = await fetch(url).then(res => res.json());
        return result;
    } catch (err) {
        console.log(err)
    }
} 