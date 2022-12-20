import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { Input } from '@tablecheck/tablekit-input';
import { Button } from '@tablecheck/tablekit-button';
import { getCitySearch, getShopResults } from '../../services/services';

import { HomeHeadline, HomeWrapper, UnorderedList } from './styles';

export function Home(): JSX.Element {
  const [t, { language }] = useTranslation();
  const [query, setQuery] = React.useState('');
  const [locations, setLocations] = React.useState([]);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [selectedLocation, setSelectedLocation] = React.useState<any>();

  const handleOnChangeInput = async(e: any) => {
    setQuery(e.target.value);
    if (!e.target.value) return;

    const { locations } = await getCitySearch(e.target.value);
    setLocations(locations);
    setShowSuggestions(true);
  }

  const handleSearchInput = async () => {
    const { payload : { geo } } = selectedLocation;
    const res = await getShopResults(geo);
    console.log(res)
  }

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    if (!selectedLocation) return;
    const { payload : { geo } } = selectedLocation;
    const res = await getShopResults(geo);
    console.log(res)
  }

  const onSelectLocation = (location: any) => {
    setLocations([]);
    setShowSuggestions(false);
    setQuery(location.text);
    setSelectedLocation(location);
  }

  React.useEffect(() => {
    if (!query) {
      setLocations([]);
      setShowSuggestions(false);
    }
  }, [query])

  return (
    <HomeWrapper>
      <HomeHeadline>{t('attributes.titles.headline')}</HomeHeadline>
      <Outlet />
      <Helmet>
        <title lang={language}>{`${t('attributes.titles.headline')} - ${t(
          'keywords.app_name'
        )}`}</title>
      </Helmet>
      <form onSubmit={handleFormSubmit}>
        <Input 
          label="Search City" 
          type="search" 
          onChange={handleOnChangeInput}
          value={query}
        />
        {showSuggestions && query && 
        <UnorderedList>
          {locations?.map((location: any, index) => {
            return (
              <li key={index} onClick={() => onSelectLocation(location)}>
                {location.text}
              </li>
            )
          })}
        </UnorderedList>}
        <Button onClick={handleSearchInput}>Search</Button>
      </form>
    </HomeWrapper>
  );
}
