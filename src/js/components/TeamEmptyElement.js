// Dependencies
import React from 'react';

// Styles
import {TeamElement} from '../styles/TeamPage.style';

// Components
import Identifiers from './Identifiers';
import StaticPokeball from './StaticPokeball';


const TeamEmptyElement = () => {
    return (
        <TeamElement>
            <StaticPokeball />
            <Identifiers id='0' name='Not defined' />
        </TeamElement>
    );
};
export default TeamEmptyElement;