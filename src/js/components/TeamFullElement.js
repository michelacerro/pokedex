// Dependencies
import React from 'react';
import {useDispatch} from 'react-redux';

// Icons
import {FiMinus} from 'react-icons/fi';

// Actions
import {deleteTeam} from '../actions';

// Styles
import {TeamElement, ImageBox, PokemonImage, DeleteButton} from '../styles/TeamPage.style';

// Components
import Identifiers from './Identifiers';


const TeamFullElement = (props) => {
    const dispatch = useDispatch();

    const outMyTeam = (e) => {
        dispatch(deleteTeam(e.target.id));
    };

    return (
        <TeamElement>
            <ImageBox><PokemonImage src={props.data.image} alt={props.data.name} /></ImageBox>
            <Identifiers id={props.data.id} name={props.data.name} />
            <DeleteButton onClick={outMyTeam}><FiMinus /> <span id={props.data.id}>Delete from my Team</span></DeleteButton>
        </TeamElement>
    );
};
export default TeamFullElement;