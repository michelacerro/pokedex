// Dependecies
import styled from 'styled-components';


export const PokeballBox = styled.div`
    position: absolute;
    bottom: 7%;
    left: 7%;

    width: 250px;
    height: 250px;
    border-radius: 50%;
    overflow: hidden;
    // transform-origin: 100% 100%;
`;

export const PokeballTop = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 50%;
    background: linear-gradient(to right, #D9436B, #73162F);
    z-index: 0;
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
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #4F4C59;
    transform: translate(-50%, -50%);
`;

export const PokeballMiddle = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 25px;
    transform: translateY(-50%);
    background-color: #4F4C59;
`;

export const PokeballLightCenter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: linear-gradient(to right, #F2F2F2, #CAC7D9);
    transform: translate(-50%, -50%);
`;

export const PokeballBorderCenter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 0.5px solid #4F4C59;
    transform: translate(-50%, -50%);
`;