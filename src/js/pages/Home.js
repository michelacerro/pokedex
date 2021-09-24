// Dependencies
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';

// Icons
import {HiMinus, HiArrowNarrowRight} from 'react-icons/hi';

// Styles
import {HomePage, HomeTextBox, HomeTitle, HomeLink} from '../styles/HomePage.style';

// Actions
import {createList, deleteList, deleteText, deleteWarning, deleteType} from '../actions';

// Components
import AnimatedPokeball from '../components/AnimatedPokeball';


const Home = () => {
    const dispatch = useDispatch();
    dispatch(deleteList());
    dispatch(deleteText());
    dispatch(deleteWarning());
    dispatch(deleteType());

    const [pokemonList, setPokemonList] = useState([]);
    useEffect(() => {
        async function fetchData () {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`)
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
    }, []);
    dispatch(createList(pokemonList));


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