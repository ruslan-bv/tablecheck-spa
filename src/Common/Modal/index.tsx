import React from 'react';
import { ModalPropsInterface } from '../../Interfaces/interfaces';
import { ModalWrapper, ModalContent, CloseButton,
         ShopFeatures, ShopListItem, ShopListName, ShopListValue } from './styles';

export const Modal:React.FC<ModalPropsInterface> = ({ selectedShop, hideModalHandler }) => {
  return (
      <ModalWrapper>
        <ModalContent>
            <CloseButton onClick={hideModalHandler}>
              Close
            </CloseButton>
            <h2>{selectedShop.name[1]}</h2>
            <ShopFeatures>
              <ShopListItem>
                <ShopListName>Service Modes</ShopListName>
                <ShopListValue>{selectedShop.serviceModes.map((service: string) => `${service} `)}</ShopListValue>
              </ShopListItem>
              <ShopListItem>
                <ShopListName>Cuisines</ShopListName>
                <ShopListValue>{selectedShop.cuisines.map((cuisine: string) => `${cuisine} `)}</ShopListValue>
              </ShopListItem>
              <ShopListItem>
                <ShopListName>Tags</ShopListName>
                <ShopListValue>{selectedShop.tags.map((tag: string) => `${tag} `)}</ShopListValue>
              </ShopListItem>
            </ShopFeatures>
        </ModalContent>
      </ModalWrapper>
    );
  }
  