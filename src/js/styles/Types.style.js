// Dependencies
import styled from 'styled-components';

export const TypeBox = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Type = styled.div`
    --grass: #90BF2A;
    --poison: #AE7EF2;
    --fire: #F20519;
    --flying: #222A59;
    --water: #4878D9;
    --bug: #367334;
    --normal: #6C6F73;
    --electric: #F2D750;
    --ground: #A64F03;
    --fairy: #F2AEE0;
    --fighting: #D96F32;
    --psychic: #F244C4;
    --rock: #592B02;
    --steel: #89888C;
    --ice: #38BDF2;
    --ghost: #73346F;
    --dragon: #8C0F26;
    --dark: #1D1E26;

    background-color: var(${props => ('--' + props.type)});
    border-radius: 15px;
    min-height: 30px;
    min-width: 30px;

    margin-right: 20px;
    padding: 10px;
    color: #ffffff;
    text-transform: capitalize;
`;