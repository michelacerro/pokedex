// Dependencies
import React from 'react';

// Components
import AnimatedPokeball from '../components/AnimatedPokeball';

// Styles
import {HomePage, HomeTextBox, HomeTitle, HomeLink} from '../styles/HomePage.style';

// Icons
import {HiMinus, HiArrowNarrowRight} from 'react-icons/hi';


const Home = () => {
    return (
        <HomePage>
            <HomeTextBox>
                <HomeTitle>Pokémon</HomeTitle>
                <br />
                <br />
                <HomeLink to='/pokedex'><HiMinus /><HiMinus /><HiArrowNarrowRight /> <span>Pokédex</span></HomeLink>
            </HomeTextBox>
            <AnimatedPokeball />
        </HomePage>
    )
};
export default Home;