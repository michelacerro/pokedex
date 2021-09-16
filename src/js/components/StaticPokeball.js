// Dependecies
import React from 'react';

// Styles
import {StaticPokeballBox, PokeballTop, PokeballBottom, PokeballDarkCenter, PokeballMiddle, 
    PokeballLightCenter, PokeballBorderCenter} from '../styles/Pokeball.style';


const StaticPokeball = () => {
    return (
        <StaticPokeballBox> 
            <PokeballTop />
            <PokeballBottom />
            <PokeballDarkCenter />
            <PokeballMiddle />
            <PokeballLightCenter />
            <PokeballBorderCenter />
        </StaticPokeballBox>
    )
};
export default StaticPokeball;