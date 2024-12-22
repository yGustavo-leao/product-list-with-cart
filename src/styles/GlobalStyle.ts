import { createGlobalStyle } from "styled-components";
import { Red_Hat_Text } from 'next/font/google'

const redHadText = Red_Hat_Text({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
})

export const GlobalStyle = createGlobalStyle<{ $isOpen: boolean }>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${redHadText.style.fontFamily};
    }

    button {
        cursor: pointer;
    }

    html, body{
        overflow: ${({ $isOpen }) => $isOpen ? 'hidden' : 'auto'};
    }
    
    body {
        background-color: ${({ theme }) => theme.colors.rose_50};
    }
`