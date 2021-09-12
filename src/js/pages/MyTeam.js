// Dependencies
import React from 'react';

// Styles
import {Button} from '../styles/Buttons.style';

// Components
import StaticPokeball from '../components/StaticPokeball';
import Identifiers from '../components/Identifiers';


const MyTeam = () => {
    return (
        <>
        <StaticPokeball />
        <Identifiers id={'0'} name={'prova'} />
        <Button>Delete</Button>
        </>
    );
};
export default MyTeam;