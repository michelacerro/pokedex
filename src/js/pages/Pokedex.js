// Dependecies
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Styles
import {PokedexPage, ExtraBox, MainBox} from '../styles/PokedexPage.style';

// Components
import Menu from '../components/Menu';
import SearchBox from '../components/SearchBox';
import PreviewCard from '../components/PreviewCard';


const Pokedex = () => {
    let url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`;
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        async function fetchData () {
            const response = await axios.get(url)
                .catch(error => alert(error));
            
            async function pokemonData (result) {
                result.forEach(async (pokemon) => {
                    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                        .catch(error => alert(error));
                    setPokemonList(list => [...list, data.data]);
                });
            };
            pokemonData(response.data.results);
        };
        fetchData()
    }, [url]);


    return (
        <PokedexPage>
            <ExtraBox>
                <Menu />
                <SearchBox />
            </ExtraBox>
            <MainBox>
                {pokemonList.map(pokemon => {
                    return (
                        <PreviewCard key={pokemon.id} data={pokemon} />
                    )})
                }
            </MainBox>
        </PokedexPage>
    );
};
export default Pokedex;