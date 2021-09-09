// Dependecies
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Components
import PreviewCard from '../components/PreviewCard';
// import SearchBox from '../components/SearchBox';


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
        }
        fetchData()
    }, [url]);


    return (
        <div>
            {/* <SearchBox /> */}
            {pokemonList.map(pokemon => {
                return (
                    <PreviewCard key={pokemon.id} data={pokemon} />
                )})
            }
        </div>
    );
};
export default Pokedex;