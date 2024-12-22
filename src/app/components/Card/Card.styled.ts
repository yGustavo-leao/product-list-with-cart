import styled from "styled-components";

export const CardContainer = styled.div`
    grid-area: card;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    @media (min-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(3, auto);
    }
`

export const Container = styled.div`
    max-width: 370px;
    padding-bottom: 1rem;
    row-gap: 1rem;
    display: flex;
    flex-direction: column;

    @media (min-width: 800px) {
        max-width: 230px;
    }
`

export const BannerContainer = styled.div`
    position: relative;
    display: flex;
    border-radius: 20px;

    @media (min-width: 800px) {
        aspect-ratio: 1/1;
    }
    
    &:hover {
        outline: 2px solid ${({theme}) => theme.colors.red};
    }
`

export const Banner = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
`

export const Details = styled.div`
    margin-top: 1rem;
`

export const Category = styled.span`
    color: ${({theme}) => theme.colors.rose_300};
`

export const Name = styled.h3`
    color: ${({theme}) => theme.colors.rose_900};
`

export const Description = styled.p`

`

export const Price = styled.span`
    font-weight: bold;
    color: ${({theme}) => theme.colors.red};
`