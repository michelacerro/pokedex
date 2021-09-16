// Dependecies
import React from 'react';

// Styles
import {AnimatedPokeballBox, PokeballTop, PokeballBottom, PokeballDarkCenter, 
    PokeballMiddle, PokeballLightCenter, PokeballBorderCenter, PokeballShadow} from '../styles/Pokeball.style';


const AnimatedPokeball = () => {
    return (
        <>
            <AnimatedPokeballBox> 
                <PokeballTop />
                <PokeballBottom />
                <PokeballDarkCenter />
                <PokeballMiddle />
                <PokeballLightCenter />
                <PokeballBorderCenter />
            </AnimatedPokeballBox>
            <PokeballShadow />
        </>
    )
};
export default AnimatedPokeball;