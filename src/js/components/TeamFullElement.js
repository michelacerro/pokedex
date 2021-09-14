// Dependencies
import React from 'react';
import {useDispatch} from 'react-redux';

// Actions
import {deletePokemon} from '../actions';

// Components
import Identifiers from './Identifiers';

// Styles
import {Button} from '../styles/Buttons.style';


const TeamFullElement = (props) => {
    const dispatch = useDispatch();

    const outMyTeam = (e) => {
        dispatch(deletePokemon(e.target.id));
    };

    return (
        <>
            <img src={props.data.image} alt={props.data.name} />
            <Identifiers id={props.data.id} name={props.data.name} />
            <Button onClick={outMyTeam}>Delete Pokémon from my Team</Button>
        </>
    );
};
export default TeamFullElement;