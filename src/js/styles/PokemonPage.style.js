// Dependencies
import styled from 'styled-components';


export const PokemonPage = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PokemonCard = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const PokemonColumn = styled.div`
    width: 50%;
`;

export const PokemonData = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PokemonImage = styled.img`
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
`;

export const AddButton = styled.button`
    margin-top: 50px;
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

export const DataBox = styled.div`
    background-color: #f2f2f2;
    border-radius: 10px;

    margin: 40px 20px;
    padding: 0 20px 20px 20px;
`;

export const DataTitle = styled.h2`
    font-family: 'Press Start 2P', cursive;
    font-size: 20px;
    text-transform: uppercase;
    color: #F2B705;
    text-shadow: 2px 2px #3F61A6, -2px 2px #3F61A6, -2px -2px #3F61A6, 2px -2px #3F61A6,
                2px 0px #3F61A6, -2px 0px #3F61A6, 0px 2px #3F61A6, 0px -2px #3F61A6;

    position: relative;
    top: -11px;
    left: -5px;
`;

export const DataLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    padding: 2px;
    text-transform: capitalize;
`;

export const PokemonChange = styled.div`
    width: 70px;
    height: 100%;
`;

export const PreviousPokemon = styled.button`
    position: absolute;
    top: 50%;
    left: 10px;

    border: none;
    background-color: transparent;
    font-size: 50px;
    color: #3F61A6;

    &:hover {
        cursor: pointer;
        color: #F2B705;
    }
`;

export const NextPokemon = styled.button`
    position: absolute;
    top: 50%;
    right: 10px;

    border: none;
    background-color: transparent;
    font-size: 50px;
    color: #3F61A6;

    &:hover {
        cursor: pointer;
        color: #F2B705;
    }
`;