// Dependencies
import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const ErrorPage = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ErrorBox = styled.div`
    width: 70vw;
    height: 80vh;
    padding: 40px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;

    background-color: #f2f2f2;
    border-radius: 20px;
`;

export const ErrorTextBox = styled.div`
    width: 100%;
    height: 7em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

export const ErrorText = styled.h2`
    font-family: 'Press Start 2P', cursive;
`;

export const ErrorTyping1 = styled.div`
    overflow: hidden;
    white-space: nowrap;
    border-right: 7px solid #CAC7D9;
    
    animation:
        typing 5.5s steps(15, end),
        blink-caret .7s step-end 5.7s;
        stop infinite 5.7s; 

    @keyframes typing {
        from {width: 0} to {width: 100%}
    }
    @keyframes blink-caret {
        from, to {border-color: transparent}
        50% {border-color: #CAC7D9}
    }
    @keyframs stop {
        from {border-color: #CAC7D9} to {border: none}
    }
`;

export const ErrorTyping2 = styled.div`
    overflow: hidden;
    white-space: nowrap;
    border-right: 7px solid #CAC7D9;
    
    animation:
        show 6.5s linear,
        typing 5.5s steps(20, end) 6.5s,
        blink-caret .7s step-end infinite;

    @keyframes show {
        from {visability: hidden} to {visability: visible}
    }
    @keyframes typing {
        from {width: 0} to {width: 100%}
    }
    @keyframes blink-caret {
        from, to {border-color: transparent}
        50% {border-color: #CAC7D9}
    }
`;

export const ErrorLink = styled(Link)`
    text-decoration: none;
    color: #F2B705;
`;

export const ErrorImage = styled.img`
    width: 300px;
    height: 300px;
`;