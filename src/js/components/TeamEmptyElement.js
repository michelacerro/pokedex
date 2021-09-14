// Dependencies
import React from 'react';

// Components
import Identifiers from './Identifiers';
import StaticPokeball from './StaticPokeball';


const TeamEmptyElement = () => {
    return (
        <>
            <StaticPokeball />
            <Identifiers id='-' name='-' />
        </>
    );
};
export default TeamEmptyElement;