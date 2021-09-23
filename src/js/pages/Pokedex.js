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
    const textState = useSelector(state => state.textReducer.pokemon);
    const warningState = useSelector(state => state.warningReducer.warning);
    const typeState = useSelector(state => state.typeReducer.pokemon);
    const filterState = useSelector(state => state.filterReducer.state);

    return (
        <PokedexPage>
            <MainBox>
                {textState.length > 0
                    ?
                    textState.map(pokemonData => pokemonData.map(pokemon => <PreviewCard key={pokemon.id} data={pokemon} />))
                    : (warningState.length > 0
                        ?
                    <div>{warningState}</div>
                        : (typeState.length > 0 
                            ? 
                            typeState.map(pokemonData => pokemonData.map(pokemon => <PreviewCard key={pokemon.id} data={pokemon} />))
                            :
                        listState.map(pokemonData => pokemonData.map(pokemon => <PreviewCard key={pokemon.id} data={pokemon} />))
                        )
                    )
                }
            </MainBox>
            {filterState ? <div></div> : <Menu />}
            <SearchBox />
        </PokedexPage>
    );
};
export default Pokedex;