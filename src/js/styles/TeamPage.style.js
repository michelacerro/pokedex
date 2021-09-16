// Dependecies
import styled from 'styled-components';

export const TeamPage = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: #f2f2f2;
`;

export const TeamSpace = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TeamBox = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export const TeamElement = styled.div`
    width: 190px;
    margin: 25px 10px;
    padding: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImageBox = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #ffffff;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PokemonImage = styled.img`
    width: 85px;
    height: 85px;
`;

export const DeleteButton = styled.button`
    margin-top: 30px;
    width: 100%;
    border: none;
    background-color: transparent;

    font-size: 12px;;
    text-align: right;
    color: #3F61A6;
    padding-right: 1vw;

    span {text-decoration: underline;}

    &:hover {
        cursor: pointer;
        color: #F2B705;
    }
`;