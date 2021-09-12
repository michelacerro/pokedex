// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';

// Components
import AnimatedPokeball from '../components/AnimatedPokeball';

// Styles
import {HomePage, PageTitle} from '../styles/Pages.style';
import {Button} from '../styles/Buttons.style';


const Home = () => {
    return (
        <HomePage>
            <PageTitle>Pokémon</PageTitle>
            <Link to='/pokedex'>
                <Button>Pokédex</Button>
            </Link>
            <AnimatedPokeball />
        </HomePage>
    )
};
export default Home;