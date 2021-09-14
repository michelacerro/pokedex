// Dependencies
import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        color: #4F4C59;

    }


    // TEXT
    h1, h2 {
        text-transform: capitalize;
    }

    h3 {
        font-family: 'Press Start 2P', cursive;
        color: #F2B705;
    }

    h4 {
        color: #3F61A6;
        font-weight: bold;
        text-align: right;
    }

   
    // IMAGE
    img {
        width: 100px;
        height: 100px;
    }

`;
export default GlobalStyle;