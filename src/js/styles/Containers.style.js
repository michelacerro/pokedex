// Dependencies
import styled from 'styled-components';


export const GlobalBox = styled.div`
    width: 100%;
    display: flex;
`;

export const ColumnBox = styled.div`
    --ten: 10%;
    --twenty: 20%;
    --thirty: 30%;
    --forty: 40%;
    --fifty: 50%;
    --sixty: 60%;
    --seventy: 70%;
    --eighty: 80%;
    --ninty: 90%;
    --full: 100%;

    width: var(${props => ('--' + props.width)});

    text-align: ${props => (props.type ? 'center' : 'left')};

    // border: 1px solid black;
`;

export const GeneralBox = styled.div`
    // margin
    --info-margin: 40px 20px;
    --card-margin: 20px;

    // padding
    --info-padding: 0 20px 20px 20px;
    --card-padding: 20px;

    margin: var(${props => ('--' + props.type + '-margin')});
    padding: var(${props => ('--' + props.type + '-padding')});

    background-color: #f2f2f2;
    border-radius: 10px;
`;

export const BoxTitle = styled.h3`
    font-size: 20px;
    text-transform: uppercase;
    text-shadow: 2px 2px #3F61A6, -2px 2px #3F61A6, -2px -2px #3F61A6, 2px -2px #3F61A6,
                2px 0px #3F61A6, -2px 0px #3F61A6, 0px 2px #3F61A6, 0px -2px #3F61A6;
    
    position: relative;
    top: -11px;
    left: -5px;
`;