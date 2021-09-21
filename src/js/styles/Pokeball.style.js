// Dependecies
import styled from 'styled-components';


export const AnimatedPokeballBox = styled.div`
    position: absolute;
    bottom: 7%;
    left: 7%;

    width: 35vw;
    max-width: 250px;
    height: 35vw;
    max-height: 250px;
    border-radius: 50%;
    overflow: hidden;
    
    animation: move 5s infinite;
    @keyframes move {
        0%, 87% {transform: rotate(0deg);} 
        10% {transform: rotate(-25deg);} 
        25% {transform: rotate(25deg);}
        42% {transform: rotate(-15deg);}
        62% {transform: rotate(15deg);}
    }
`;

export const StaticPokeballBox = styled.div`
    position: relative;

    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
`;

export const PokeballTop = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 50%;
    background: linear-gradient(to right, #D9436B, #73162F);
`;

export const PokeballBottom = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 50%;
    background: linear-gradient(to right, #F2F2F2, #CAC7D9);
`;

export const PokeballDarkCenter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;

    width: 36%;
    height: 36%;
    border-radius: 50%;
    background-color: #4F4C59;
    transform: translate(-50%, -50%);
`;

export const PokeballMiddle = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 10%;
    transform: translateY(-50%);
    background-color: #4F4C59;
`;

export const PokeballLightCenter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 22%;
    height: 22%;
    border-radius: 50%;
    background: linear-gradient(to right, #F2F2F2, #CAC7D9);
    transform: translate(-50%, -50%);
`;

export const PokeballBorderCenter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 14%;
    height: 14%;
    border-radius: 50%;
    border: 1px solid #CAC7D9;
    transform: translate(-50%, -50%);
`;

export const PokeballShadow = styled.div`
    position: absolute;
    bottom: 2%;
    left: 7%;
    width: 35vw;
    max-width: 250px;
    height: 20px;
    background: rgb(0, 0, 0, 0.5);
    border-radius: 50%;
    filter: blur(15px);
    z-index: -1;
`;