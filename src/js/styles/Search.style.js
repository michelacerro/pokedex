// Dependencies
import styled from 'styled-components';


export const SearchButton = styled.button`
    border: none;
    background-color: transparent;
    color: #3F61A6;
    font-size: 25px;
    padding: 15px;

    &:hover {
        cursor: pointer;
        color: #F2B705;
    }
`;

export const FilterBox = styled.div`
    display: none;

    position: fixed;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    min-width: 80vw;
    background-color: #CAC7D9;
    padding: 0 25px;

    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ExitBox = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
`;

export const FilterTitle = styled.h3`
    font-family: 'Press Start 2P', cursive;
    margin-bottom: 15px;
`;

export const FilterInput = styled.input`
    min-width: 300px;
    height: 2em;
    border: none;
    border-radius: 20px;
    box-shadow: 2px 2px 10px #f2f2f2;
    color: #4F4C59;
    font-size: 16px;
    padding: 15px;
    margin-bottom: 50px;
`;

export const FilterTypes = styled.div`
    min-width: 300px;
    max-width: 800px;
`;

export const FilterButton = styled.button`
    border: none;
    background-color: transparent;
    color: inherit;
    font-size: 14px;
    text-decoration: underline;
    margin-top: 25px;

    &:hover {
        cursor: pointer;
        color: #F2f2f2;
    }
`;

export const StartButton = styled.button`
    border: none;
    background-color: transparent;
    color: #3F61A6;
    font: inherit;
    margin-top: 50px;

    &:hover {
        cursor: pointer;
        color: #F2B705;
    }
`;