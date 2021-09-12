// Dependecies
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Components
import Menu from '../components/Menu';
import SearchBox from '../components/SearchBox';
import PreviewCard from '../components/PreviewCard';

// Styles
import {GlobalBox, ColumnBox} from '../styles/Containers.style';


const Pokedex = () => {
    let url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`;
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
        <GlobalBox>
            <ColumnBox width='thirty'>
                <Menu />
                <SearchBox />
            </ColumnBox>
            <ColumnBox width='seventy'>
                {pokemonList.map(pokemon => {
                    return (
                        <PreviewCard key={pokemon.id} data={pokemon} />
                    )})
                }
            </ColumnBox>
        </GlobalBox>
    );
};
export default Pokedex;