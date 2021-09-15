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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    height: 100%;
    background-color: #F2f2f2;

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
    box-shadow: 2px 2px 10px #CAC7D9;
    color: #4F4C59;
    font-size: 16px;
    padding: 15px;
    margin-bottom: 50px;
`;

export const FilterTypes = styled.div`
    max-width: 600px;
`;