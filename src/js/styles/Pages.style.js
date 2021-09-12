// Dependencies
import styled from 'styled-components';


export const PageTitle = styled.h3`
    font-size: 9vw;
    text-shadow: 1vw 1vw #3F61A6, -1vw 1vw #3F61A6, -1vw -1vw #3F61A6, 1vw -1vw #3F61A6,
                1vw 0vw #3F61A6, -1vw 0vw #3F61A6, 0vw 1vw #3F61A6, 0vw -1vw #3F61A6;
`;

export const HomePage = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;

    padding-top: 20vh;

    background: radial-gradient(#CAC7D9, transparent);
`;