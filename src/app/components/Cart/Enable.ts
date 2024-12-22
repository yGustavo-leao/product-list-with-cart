import styled from "styled-components";

export const Container = styled.div`
    width: clamp(330px, 340px, 340px);
    grid-area: cart;
    background-color: white;
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    @media (min-width: 800px) {
        justify-self: end;
        align-self: flex-start;
    }
`

export const Title = styled.h2`
    margin: 1rem 0;
    color: ${({ theme }) => theme.colors.red};
`

export const Counter = styled.span`

`

export const List = styled.ul`
    list-style: none;
    max-height: 380px;
    overflow-y: scroll;
`

export const Item = styled.li`
    padding: 1rem 0;
    display: grid;
    grid-template-areas:
    "title button"
    "info button";
    row-gap: .5rem;
    border-bottom: 1px solid ${({theme}) => theme.colors.rose_300};
`

export const CartInfo = styled.div`
    grid-area: info;
    display: flex;
    column-gap: .7rem;
`

export const ItemName = styled.p`
    grid-area: title;
    color: ${({ theme }) => theme.colors.rose_500};
    font-weight: bold;
`

export const ItemQuantity = styled.span`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.red};
`

export const ItemPrice = styled.span`
    color: ${({theme}) => theme.colors.rose_300};
`

export const ItemTotalPrice = styled.span`
    font-weight: 600;
    color: ${({theme}) => theme.colors.rose_300};
`

export const RemoveButton = styled.button`
    grid-area: button;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-right: 0;
    padding: 2px;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid ${({theme}) => theme.colors.rose_300};
`

export const RemoveIcon = styled.img`
    width: 100%;
    height: 100%;
`

export const OrderContainer = styled.div`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const OrderText = styled.p`
    font-weight: 600;
    color: ${({theme}) => theme.colors.rose_500};
`

export const OrderValue = styled.span`
    font-size: 2rem;
    font-weight: bold;
    color: ${({theme}) => theme.colors.rose_900};
`

export const MessageContainer = styled.div`
    padding: 1rem 2rem;
    border-radius: 10px;
    display: flex;
    column-gap: .5rem;
    background-color: ${({theme}) => theme.colors.rose_100};
`

export const Message = styled.p`
    color: ${({theme}) => theme.colors.rose_500};
`

export const MessageIcon = styled.img`
`

export const MessageSpan = styled.span`
    font-weight: 600;
    color: ${({theme}) => theme.colors.rose_900};
`

export const ConfirmButton = styled.button`
    padding: 1rem;
    border: none;
    border-radius: 25px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.rose_100};
    background-color: ${({theme}) => theme.colors.red};
`