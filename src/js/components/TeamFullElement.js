// Dependencies
import React from 'react';
import {useDispatch} from 'react-redux';

// Icons
import {FiMinus} from 'react-icons/fi';

// Actions
import {deletePokemon} from '../actions';

// Styles
import {TeamElement, ImageBox, PokemonImage, DeleteButton} from '../styles/TeamPage.style';

// Components
import Identifiers from './Identifiers';


const TeamFullElement = (props) => {
    const dispatch = useDispatch();

    const outMyTeam = (e) => {
        dispatch(deletePokemon(e.target.id));
    };

    return (
        <TeamElement>
            <ImageBox><PokemonImage src={props.data.image} alt={props.data.name} /></ImageBox>
            <Identifiers id={props.data.id} name={props.data.name} />
            <DeleteButton id={props.data.id} onClick={outMyTeam}><FiMinus /> <span>Delete from my Team</span></DeleteButton>
        </TeamElement>
    );
};
export default TeamFullElement;