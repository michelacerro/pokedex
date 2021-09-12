// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';

// Components
import Button from '../components/Button';
import Pokeball from '../components/Pokeball';

// Styles
import {HomePage, PageTitle} from '../styles/Pages.style';


const Home = () => {
    return (
        <HomePage>
            <PageTitle>Pokemon</PageTitle>
            <Link to='/pokedex'>
                <Button text='Pokedex'></Button>
            </Link>
            <Pokeball />
        </HomePage>
    )
};
export default Home;