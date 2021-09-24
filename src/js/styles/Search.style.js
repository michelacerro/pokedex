// Dependencies
import styled from 'styled-components';


export const SearchButton = styled.button`
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

export const FilterBox = styled.div`
    display: none;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    // width: 220px;
    // height: 410px;

    background-color: #CAC7D9;
    paddig: 25px;

    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ExitButton = styled.button`
    position: absolute;
    top: 10px;
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

export const FilterTitle = styled.p`
    font-family: 'Press Start 2P', cursive;
    margin: 5px;
    text-align: center;

    font-size: 14px;
`;

export const FilterForm = styled.form`
    display: flex;
    align-items: center;
    margin-bottom: 40px;
`;

export const FilterInput = styled.input`
    // min-width: 200px;
    // max-width: 280px;
    // width: 80vw;
    height: 2em;

    border: none;
    border-radius: 20px;
    box-shadow: 2px 2px 10px #f2f2f2;
    background-color: rgb(255, 255, 255, 75%);

    color: #4F4C59;
    font-size: 16px;
    padding: 15px;

    &:focus {
        outline: none;
        background-color: rgb(255, 255, 255);
    }
`;

export const InputButton = styled.button`
    height: 2em;
    margin-left: 5px;
    border: none;
    background-color: transparent;
    color: #3F61A6;
    font-size: 20px;

    &:hover {
        cursor: pointer;
        color: #F2B705;
    }
`; 

export const FilterTypes = styled.div`
    min-width: 250px;
    max-width: 320px;
`;

export const FilterButton = styled.button`
    border: none;
    background-color: transparent;
    color: inherit;
    font-size: 14px;
    text-decoration: underline;
    margin-top: 15px;

    &:hover {
        cursor: pointer;
        color: #F2f2f2;
    }
`;