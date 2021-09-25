// Dependecies
import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const TeamPage = styled.div`
    width: 100vw;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #f2f2f2;
`;

export const TeamBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export const TeamElement = styled.div`
    width: 190px;
    height: 230px;
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

export const ReturnLink = styled(Link)`
    position: fixed;
    top: 55px;
    left: 10px;

    border: none;
    background-color: transparent;
    color: #3F61A6;
    font-size: 25px;

    &:hover {
        cursor: pointer;
        color: #F2B705;
    }
`;