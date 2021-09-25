// Dependencies
import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
    * {
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;

        -ms-overflow-style: none;
        scrollbar-width: none; 
        ::-webkit-scrollbar {display: none;}

        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        color: #4F4C59;
    }



    // TEXT
    h2, h4 {text-transform: capitalize;}
    h4 {font-size: 16px;}

    h5 {
        color: #3F61A6;
        font-weight: bold;
        text-align: right;
    }
`;
export default GlobalStyle;