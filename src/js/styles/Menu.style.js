// Dependencies
import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const MenuButton = styled.button`
    border: none;
    background-color: transparent;
    color: #3F61A6;
    font-size: 25px;
    padding: 15px;


    // display: flex;
    // align-items: center;
    
    &:hover {
        cursor: pointer;
        color: #F2B705;
    }
`;

export const MenuBox = styled.div`
    display: none;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 320px;
    height: 320px;
    border-radius: 20px;
    background-color: #F2B705;
    border: 4px solid #3F61a6; 

    font-size: 25px;
    font-family: 'Press Start 2P', cursive;
    color: #3F61A6;

    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MenuLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px;
`;