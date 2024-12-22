import styled from "styled-components";

export const DisableContainer = styled.div`
    width: clamp(330px, 340px, 340px);
    grid-area: cart;
    display: flex;
    padding: 2rem;
    border-radius: 5px;
    flex-direction: column;
    row-gap: 1rem;
    background-color: white;
`

export const DisableTitle = styled.h2`
    color: ${({theme}) => theme.colors.red};
`

export const DisableImage = styled.img`
    min-width: 200px;
    min-height: 200px;
    max-width: 200px;
    max-height: 200px;
    align-self: center;
`

export const DisableText = styled.p`
    color: ${({theme}) => theme.colors.rose_400};
    font-weight: bold;
`