// Dependecies
import React from 'react';

// Styles
import {PokeballBox, PokeballTop, PokeballBottom, PokeballDarkCenter, PokeballMiddle, PokeballLightCenter, PokeballBorderCenter} from '../styles/Pokeball.style';


const Pokeball = () => {
    return (
        <PokeballBox> 
            <PokeballTop />
            <PokeballBottom />
            <PokeballDarkCenter />
            <PokeballMiddle />
            <PokeballLightCenter />
            <PokeballBorderCenter />
        </PokeballBox>
    )
};
export default Pokeball;