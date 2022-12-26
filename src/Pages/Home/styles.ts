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
  max-width: 180px;
  li {
    padding: 0.5rem;
  }
`

export const FormGroup = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0 20px;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
`