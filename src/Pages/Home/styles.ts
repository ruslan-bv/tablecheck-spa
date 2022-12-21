import styled from '@emotion/styled';

import { Link } from 'react-router-dom';
import { Headline, PageWrapper } from 'styles';
import { pageTransitionEasing, slideUp } from 'styles';

export const HomeWrapper = styled(PageWrapper)`
  max-width: initial;
  animation: ${slideUp} ${pageTransitionEasing} 0.5s;
`;

export const HomeHeadline = styled(Headline)`
  text-align: center;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const UnorderedList = styled.ul`
  border: 1px solid #999;
  border-top-width: 0;
  list-style: none;
  margin-top: 0;
  max-height: 143px;
  overflow-y: auto;
  padding-left: 0;
  width: calc(300px + 1rem);

  li {
    padding: 0.5rem;
  }
`
export const ShopCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  margin: 10px auto;
  text-align: center;
  font-family: arial;
`

export const ShopImage = styled.img`
  height: 200px;
  width: 100%;
`

export const ShopTitle = styled.span`
  color: grey;
  font-size: 18px;
`

export const ShopButton = styled.button`
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;

  &:hover {
    opacity: 0.7;
  }
`

export const FormGroup = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`