import styled from "styled-components";

export const Container = styled.main`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    position: relative;
    justify-content: center;
    align-items: center;

    @media (min-width: 800px) {
        align-items: start;
        display: grid;
        grid-template-areas:
        "title title cart"
        "card card cart";
        column-gap: 1rem;
    }
`

export const Title = styled.h1`
    grid-area: title;
    color: ${({theme}) => theme.colors.rose_900};
`