// Dependencies
import styled from 'styled-components';

export const StatBox = styled.div`
    display: flex;
    align-items: center;
`;

export const StatLabel = styled.p`
    width: 170px;
    text-transform: capitalize;
    margin: 0 15px 5px 0;
    text-align: right;
`;

export const StatBar = styled.div`
    background-color: #3F61A6;
    border-radius: 8px;
    height: 15px;
    width: 90%;
`;

export const StatLevel = styled.div`
    background-color: #1B3059;
    border-radius: 8px;
    height: 15px;
    width: ${props => (props.stat*100/250 + '%')};
`;