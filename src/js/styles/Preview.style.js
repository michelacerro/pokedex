// Dependecies
import styled from 'styled-components';
import {Link} from 'react-router-dom'


export const PreviewLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const PreviewBox = styled.div`
    width: 220px;
    background-color: #f2f2f2;
    border-radius: 10px;
    margin: 10px;
    padding: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PreviewImage = styled.img`
    width: 120px;
    height: 120px;
`;

export const PreviewInfo = styled.div`
    padding-top: 30px;
    width: 100%;
`;

export const PreviewBalls = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    font-size: 30px;
    color: #D9436B;
`;