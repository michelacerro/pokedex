// Dependencies
import React from 'react';
import {useDispatch} from 'react-redux';

// Actions
import {deletePokemon} from '../actions';

// Components
import Identifiers from './Identifiers';

// Styles
import {PokemonTeam} from '../styles/PokemonTeam.style';
import {Button} from '../styles/Buttons.style';


const TeamFullElement = (props) => {
    const dispatch = useDispatch();

    const outMyTeam = (e) => {
        dispatch(deletePokemon(e.target.id));
    };

    return (
        <PokemonTeam>
            <img src={props.data.image} alt={props.data.name} />
            <Identifiers id={props.data.id} name={props.data.name} />
            <Button id={props.data.id} onClick={outMyTeam}>Delete Pokémon from my Team</Button>
        </PokemonTeam>
    );
};
export default TeamFullElement;