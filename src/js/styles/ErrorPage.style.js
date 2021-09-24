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
    width: 80vw;
    height: 80vh;
    padding: 40px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    background-color: #f2f2f2;
    border-radius: 20px;
`;

export const ErrorTextBox = styled.div`
    width: 100%;
    min-height: 8vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

export const ErrorText = styled.p`
    font-family: 'Press Start 2P', cursive;
    font-size: 3.2vw;
`;

export const ErrorTyping1 = styled.div`
    overflow: hidden;
    white-space: nowrap;
    border-right: 1vw solid #CAC7D9;
    
    animation:
        typing 2s steps(15, end),
        blink-border .5s step-end 16,
        hide-border 1000000s 2.5s; 

    @keyframes typing {
        from {width: 0;} to {width: 100%;}
    }
    @keyframes blink-border {
        from, to {border-color: transparent;}
        50% {border-color: #CAC7D9;}
    }
    @keyframes hide-border {
        0% {border-color: transparent;}
}
`;

export const ErrorTyping2 = styled.div`
    overflow: hidden;
    white-space: nowrap;
    border-right: 1vw solid #CAC7D9;
        
    animation:
        show 2.5s step-end,
        typing 2.4s steps(17, end) 2.5s,
        blink-border .5s step-end infinite;

    @keyframes show {
        0% {opacity: 0%;} 100% {opacity: 100%;}
    }
    @keyframes typing {
        from {width: 0;} to {width: 100%;}
    }
    @keyframes blink-border {
        from, to {border-color: transparent;}
        50% {border-color: #CAC7D9;}
    }
`;

export const ErrorLink = styled(Link)`
    text-decoration: none;
    color: #3F61A6;

    &:hover {color: #F2B705;}
`;

export const ErrorImage = styled.img`
    height: 40vh;
    max-width: 40vw;
`;