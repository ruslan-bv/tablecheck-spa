import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Outlet, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Input } from '@tablecheck/tablekit-input';
import { Button } from '@tablecheck/tablekit-button';
import { getCitySearch } from '../../services/services';
import { ShopContext, ShopContextInterface } from '../../context/context';
import { HomeHeadline, HomeWrapper, UnorderedList, StyledLink, FormGroup } from './styles';

export function Home(): JSX.Element {
  const [t, { language }] = useTranslation();
  const [query, setQuery] = React.useState('');
  const [locations, setLocations] = React.useState([]);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [lang, setLang] = React.useState('');

  const location = useLocation();
  const { selectedLocation, setSelectedLocation } = React.useContext(ShopContext) as ShopContextInterface;

  React.useEffect(() => {
    const { pathname } = location;
    setLang(pathname.slice(1, -1));
  }, [location])

  const handleOnChangeInput = async(e: any) => {
    setQuery(e.target.value);
    if (!e.target.value) return;

    const { locations } = await getCitySearch(e.target.value);
    setLocations(locations);
    setShowSuggestions(true);
  }

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
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
      <FormGroup onSubmit={handleFormSubmit}>
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
        <StyledLink to={{
          pathname: `/${lang}/shops`,
          search: `?term=${selectedLocation?.text}`
        }}>
          <Button>Search</Button>
        </StyledLink>
      </FormGroup>
    </HomeWrapper>
  );
}
