import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
`

export const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 5px;
`

export const CloseButton = styled.button`
    cursor: pointer;
    color: black;
    border: 1px solid black;
    border-radius: 6px;
    margin-bottom: 20px;
`

export const ShopFeatures = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 24px 0;
`

export const ShopListItem = styled.li`
    height: 32px;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    border-bottom: 1px solid #e0e3ee;
    padding: 8px 0;
`

export const ShopListName = styled.span`
    margin-right: 8px;
`

export const ShopListValue = styled.span`
    text-align: right;
    color: #2C313B;
    font-weight: 600;
`
