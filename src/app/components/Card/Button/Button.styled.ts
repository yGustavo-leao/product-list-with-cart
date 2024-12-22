import styled from "styled-components"

export const Container = styled.button`
    width: 140px;
    height: 3rem;
    padding: 0 1rem;
    position: absolute;
    margin: auto;
    bottom: -1.5rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: .5rem;
    border-radius: 25px;
    cursor: pointer;
    border: 1px solid ${({theme}) => theme.colors.rose_300};
`

export const CartIcon = styled.img`
    color: red;
`

export const Text = styled.p`
    font-weight: bold;
    color: ${({theme}) => theme.colors.rose_900};
`

export const DefaultButton = styled(Container)`
    display: flex;
    column-gap: .5rem;
`

export const QuantityAdjuster = styled(Container)`
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.colors.red};
    border: none;
`

export const AmountIcon = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    padding: 3px;
    border: 1px solid white;
`

export const Quantity = styled.span`
    color: white;
    font-weight: bold;
`