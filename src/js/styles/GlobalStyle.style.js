// Dependencies
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
    }


    // TEXT
    h1, h2 {
        text-transform: capitalize;
    }

    h3 {
        font-family: 'Press Start 2P', cursive;
    }

    h4 {
        color: violet;
        font-weight: bold;
        text-align: right;
    }

   
    // IMAGE
    img {
        width: 200px;
        height: 200px;
    }

`;
export default GlobalStyle;