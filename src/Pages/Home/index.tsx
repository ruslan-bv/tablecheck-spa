import React from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Input } from '@tablecheck/tablekit-input';
import { Button } from '@tablecheck/tablekit-button';
import { getCitySearch } from '../../services/services';
import { ShopContext, ShopContextInterface } from '../../context/context';
import { LocationInterface } from '../../Interfaces/interfaces';
import { HomeHeadline, HomeWrapper, UnorderedList, StyledLink, FormGroup, InputGroup } from './styles';

export function Home(): JSX.Element {
  const [query, setQuery] = React.useState('');
  const [locations, setLocations] = React.useState([]);
  const [isShowSuggestions, setShowSuggestions] = React.useState(false);
  const [lang, setLang] = React.useState('');

  const location = useLocation();
  const { selectedLocation, setSelectedLocation } = React.useContext(ShopContext) as ShopContextInterface;

  React.useEffect(() => {
    const { pathname } = location;
    setLang(pathname.slice(1, -1));
  }, [location])

  const handleOnChangeInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (!e.target.value) return;

    const newLocations = await getCitySearch(e.target.value);
    setLocations(newLocations);
    setShowSuggestions(true);
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  }

  const onSelectLocation = (newLocation: LocationInterface) => {
    if (!newLocation) return;

    setLocations([]);
    setShowSuggestions(false);
    setQuery(newLocation.text);
    setSelectedLocation(newLocation);
  }

  React.useEffect(() => {
    if (!query) {
      setLocations([]);
      setShowSuggestions(false);
    }
  }, [query])

  return (
    <HomeWrapper>
      <HomeHeadline>Restaurant Search</HomeHeadline>
      <Outlet />
      <Helmet>
        <title>Restaurant Search</title>
      </Helmet>
      <FormGroup onSubmit={handleFormSubmit}>
        <InputGroup>
          <Input
            type="search" 
            onChange={handleOnChangeInput}
            value={query}
          />
          {isShowSuggestions && query && 
          <UnorderedList>
            {locations.map((l: LocationInterface) => {
              return (
                <li key={self.crypto.randomUUID()} onClick={() => onSelectLocation(l)}>
                  {l.text}
                </li>
              )
            })}
          </UnorderedList>}
        </InputGroup>
        <StyledLink to={{
          pathname: `/${lang}/shops`,
          search: `?term=${selectedLocation?.text}`
        }}>
          <Button disabled={!selectedLocation?.text}>Search</Button>
        </StyledLink>
      </FormGroup>
    </HomeWrapper>
  );
}
