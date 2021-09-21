// Dependencies
import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const HomePage = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20vh;

    background: radial-gradient(#CAC7D9, transparent);
`;

export const HomeTextBox = styled.div`
    text-align: right;
`;

export const HomeTitle = styled.h1`
    font-size: 9vw;
    font-family: 'Press Start 2P', cursive;
    color: #F2B705;
    text-shadow: 1vw 1vw #3F61A6, -1vw 1vw #3F61A6, -1vw -1vw #3F61A6, 1vw -1vw #3F61A6,
                1vw 0vw #3F61A6, -1vw 0vw #3F61A6, 0vw 1vw #3F61A6, 0vw -1vw #3F61A6;
`;

export const HomeLink = styled(Link)`
    text-decoration: none;
    font-family: 'Press Start 2P', cursive;
    font-size: 3vw;
    color: #4F4C59;
    padding-right: 1vw;

    span {
        color: #3F61A6;
    }
    span:hover {
        color: #F2B705;
    }

    animation: show 5s step-end;
    @keyframes show {
        0% {opacity: 0%;} 100% {opacity: 100%;}
    }
`;