// Dependencies
import React from 'react';

// Icons
import {HiMinus, HiArrowNarrowRight} from 'react-icons/hi';

// Styles
import {HomePage, HomeTextBox, HomeTitle, HomeLink} from '../styles/HomePage.style';

// Components
import AnimatedPokeball from '../components/AnimatedPokeball';


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