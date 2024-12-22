import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: rgba(0, 0, 0, .5);
`

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 20px 20px 0 0;
    padding: 3rem 2rem 1rem 2rem;
    background: white;
    max-height: 680px;

    @media (min-width: 800px) {
        margin: auto;
        border-radius: 10px;
    }
`

export const CheckIcon = styled.img`
    width: 60px;
    height: 60px;
`

export const Title = styled.h2`
    font-weight: bold;
    font-size: 2.5rem;
    color: ${({theme}) => theme.colors.rose_900};
`

export const Message = styled.p`
    color: ${({theme}) => theme.colors.rose_300};
`

export const List = styled.ul`
    max-height: 300px;
    overflow-y: scroll;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    list-style: none;
    border-radius: 10px 10px 0 0;
    background-color: ${({theme}) => theme.colors.rose_50};
`

export const Item = styled.li`
    display: flex;
    padding: 1rem;
    border-bottom: 1px solid ${({theme}) => theme.colors.rose_100};
`

export const ItemImage = styled.img`
    width: 60px;
    height: 60px;
    display: flex;
    margin-right: 1rem;
    border-radius: 5px;
`

export const ItemInfo = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    row-gap: .5rem;
`

export const Name = styled.p`
    font-weight: 600;
    color: ${({theme}) => theme.colors.rose_900};
`

export const ValuesContainer = styled.div`
    display: flex;
    column-gap: 1rem;
`

export const Quantity = styled.span`
    font-weight: bold;
    color: ${({theme}) => theme.colors.red};
`

export const Price = styled.p`
    font-weight: 500;
    color: ${({theme}) => theme.colors.rose_300};
`

export const TotalPrice = styled.span`
    justify-self: flex-end;
    align-self: center;
    font-weight: bold;
    color: ${({theme}) => theme.colors.rose_900};
`

export const TotalOrderContainer = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.colors.rose_50};
`

export const TotalOrderText = styled.p`
    color: ${({theme}) => theme.colors.rose_900};
`

export const TotalOrderValue = styled.span`
    color: ${({theme}) => theme.colors.rose_900};
    font-size: 2rem;
    font-weight: bold;
`

export const StartNewOrder = styled.button`
    padding: 1rem;
    border: none;
    border-radius: 25px;
    font-weight: bold;
    margin-top: 2rem;
    color: ${({theme}) => theme.colors.rose_100};
    background-color: ${({theme}) => theme.colors.red};
`