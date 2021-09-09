// Dependecies
import React from 'react';

// Styles
import {PokeballBox, PokeballTop, PokeballBottom, PokeballDarkCenter, PokeballMiddle, PokeballLightCenter, PokeballBorderCenter, PokeballShadow} from '../styles/Pokeball.style';


const Pokeball = () => {
    return (
        <>
        <PokeballBox> 
            <PokeballTop />
            <PokeballBottom />
            <PokeballDarkCenter />
            <PokeballMiddle />
            <PokeballLightCenter />
            <PokeballBorderCenter />
        </PokeballBox>
        <PokeballShadow />
        </>
    )
};
export default Pokeball;