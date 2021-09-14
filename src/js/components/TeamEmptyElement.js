// Dependencies
import React from 'react';

// Styles
import {PokemonTeam} from '../styles/PokemonTeam.style';

// Components
import Identifiers from './Identifiers';
import StaticPokeball from './StaticPokeball';


const TeamEmptyElement = () => {
    return (
        <PokemonTeam>
            <StaticPokeball />
            <Identifiers id='-' name='non definito' />
        </PokemonTeam>
    );
};
export default TeamEmptyElement;