// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';

// Components
import Button from '../components/Button';
import Pokeball from '../components/Pokeball';

const Home = () => {
    return (
        <div>
            <h1>home</h1>
            <Link to='/pokedex'>
                <Button text='Pokedex'></Button>
            </Link>
            <Pokeball />
        </div>
    )
};
export default Home;