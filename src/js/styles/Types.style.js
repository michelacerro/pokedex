// Dependencies
import styled from 'styled-components';

export const TypeBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.justify};
`;

export const Type = styled.button`
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

    background-color: var(${props => ('--' + props.type)});
    border-radius: 15px;
    border: none;
    min-height: 30px;
    min-width: 30px;

    margin: 3px;
    padding: 10px;
    color: #ffffff;
    text-transform: capitalize;

    &:hover, :visited {
        transform: scale(1.05, 1.05);
    }
    &:focus {
        font-weight: bold;
    }

    @media only screen and (min-width: 401px) {margin: 5px;}
`;