// Dependecies
import React from 'react';
import {useSelector} from 'react-redux';

// Styles
import {PokedexPage, MainBox} from '../styles/PokedexPage.style';

// Components
import Menu from '../components/Menu';
import SearchBox from '../components/SearchBox';
import PreviewCard from '../components/PreviewCard';


const Pokedex = () => {
    const listState = useSelector(state => state.listReducer.pokemon);
    console.log(listState);
    const filterState = useSelector(state => state.filterReducer.state);


    return (
        <PokedexPage>
            <MainBox>
                {listState.map(pokemonData => pokemonData.map(pokemon => <PreviewCard key={pokemon.id} data={pokemon} />))}
            </MainBox>
            {filterState ? <div></div> : <Menu />}
            <SearchBox />
        </PokedexPage>
    );
};
export default Pokedex;