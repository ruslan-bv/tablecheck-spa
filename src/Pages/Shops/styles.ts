import styled from '@emotion/styled';

export const ShopList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
`

export const ShopCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  margin: 10px auto;
  text-align: center;
  font-family: arial;
  border: 1px solid;
  border-radius: 10px;
`

export const ShopImage = styled.img`
  height: 200px;
  width: 100%;
`

export const NoImage = styled.img`
  height: 50px;
  width: 50px;
`

export const ShopTitle = styled.span`
  display: block;
  font-size: 17px;
  font-weight: 600;
  width: 260px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 25px;
`
