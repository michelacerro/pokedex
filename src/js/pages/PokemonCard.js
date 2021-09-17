// Dependecies
import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import axios from 'axios';

// Icons
import {FiPlus} from 'react-icons/fi';
import {HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight} from 'react-icons/hi'

// Actions
import {addPokemon} from '../actions';

// Styles
import {TypeBox, Type} from '../styles/Types.style';
import {StatBox, StatLabel, StatBar, StatLevel} from '../styles/Stats.style';
import {PokemonPage, PokemonColumn, PokemonData,  AddButton, DataBox, DataTitle, DataLine,
    PokemonChange, PreviousPokemon, NextPokemon} from '../styles/PokemonPage.style';

// Components
import Menu from '../components/Menu';
// import Identifiers from '../components/Identifiers';


const PokemonCard = () => {
    const {name} = useParams();
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        async function fetchData () {
            const response = await axios.get(url)
                .catch(error => alert(error));
            setPokemonData(response.data);
        }
        fetchData()
    }, [url]);

    
    const dispatch = useDispatch();
    const history = useHistory();

    const inMyTeam = () => {
        dispatch(addPokemon({
            id: pokemonData.id.toString(),
            name: pokemonData.name,
            image: pokemonData.sprites.other.dream_world.front_default
        }));
        history.push('/my-team');
    }


    return (
        <PokemonPage>
            <PokemonChange><PreviousPokemon><HiOutlineArrowCircleLeft /></PreviousPokemon></PokemonChange>
            <PokemonCard>
                <PokemonColumn>
                    <PokemonData>
                        {/* <PokemonImage src={pokemonData.sprites.other.dream_world.front_default} alt={name} /> */}
                        {/* <Identifiers id={pokemonData.id.toString()} name={pokemonData.name} /> */}
                        <AddButton onClick={inMyTeam}><FiPlus /> <span>Add to my Team</span></AddButton>
                    </PokemonData>
                    {/* TYPES */}
                    <DataBox>
                        <DataTitle>types</DataTitle>
                        <TypeBox>
                            {pokemonData.types ? 
                                pokemonData.types.map(type => (
                                    <Type key={type.type.name} type={type.type.name}>{type.type.name}</Type>
                                ))
                                : <div></div>
                            }
                        </TypeBox>
                    </DataBox>
                </PokemonColumn>    
                    
                <PokemonColumn>
                    {/* INFO */}
                    <DataBox>
                        <DataTitle>info</DataTitle>
                        <DataLine><p>Height </p> <h3>{pokemonData.height / 10} m</h3></DataLine>
                        <DataLine><p>Weight </p> <h3>{pokemonData.weight / 10} kg</h3></DataLine>
                        <DataLine><p>Base experience </p> <h3>{pokemonData.base_experience }</h3></DataLine>
                    </DataBox>
                    
                    {/* STATS */}
                    <DataBox>
                        <DataTitle>stats</DataTitle>
                        {pokemonData.stats ?
                            pokemonData.stats.map(stat => (
                                <StatBox key={stat.stat.name}>
                                    <StatLabel>{stat.stat.name}</StatLabel>
                                    <StatBar>
                                        <StatLevel stat={stat.base_stat}></StatLevel>
                                    </StatBar>
                                </StatBox>
                            ))
                            : <div></div>
                        }
                    </DataBox>

                    {/* ABILITIES */}
                    <DataBox>
                        <DataTitle>abilities</DataTitle>
                        {pokemonData.abilities ?
                            pokemonData.abilities.map(ability => (
                                <DataLine key={ability.ability.name}>{ability.ability.name}</DataLine>
                            ))
                            : <div></div>  
                        }
                    </DataBox>
                </PokemonColumn>
            </PokemonCard>
            <PokemonChange><NextPokemon><HiOutlineArrowCircleRight /></NextPokemon></PokemonChange>
            <Menu />
        </PokemonPage>
    );
};export default PokemonCard;
