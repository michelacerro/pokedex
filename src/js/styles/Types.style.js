// Dependencies
import styled from 'styled-components';

export const TypeBox = styled.div`
    display: flex;
`;

export const Type = styled.div`
    --grass: #548C1C;
    --poison: #8F8EBF;
    --fire: #BF0404;
    --flying: #03588C;
    --water: #387CA6;
    --bug: #3D5914;
    --normal: #595959;
    --electric: #F2E205;
    --ground: #402312;
    --fairy: #F2AEE0;
    --fighting: #FF974F;
    --psychic: #F244C4;
    --rock: #8C6645;
    --steel: #A6A6A6;
    --ice: #A7CFF2;
    --ghost: #474073;
    --dragon: #8C0F26;
    --dark: #262626;

    background-color: var(${props => ('--' + props.type)});
    border-radius: 15px;
    min-height: 30px;
    min-width: 30px;

    margin-right: 20px;
    padding: 10px;
    color: #ffffff;
    text-transform: capitalize;
`;