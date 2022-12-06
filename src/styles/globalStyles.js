import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
}

body{
    font-family: var(--font);
    font-size: 1.8rem;
}

body, html {
    width: 100%;
    height: 100%;
}

.wrapper{
    max-width: 190rem;
    width: 100%;
    margin: 0 auto;
    height: 100vh;
}

button{
    border:  none;
    background: transparent;
}

input{
    border:  none;
    outline:  none;
}

a{
    color: var(--button-text);
    background-color: var(--yellow);
    padding: 1rem;
    border-radius: 0.4rem;
    font-weight: 500;
    font-size: 1.8rem;
    text-decoration: none;
}

::-webkit-scrollbar{
    display: none;
}
`