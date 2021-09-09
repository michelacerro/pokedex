// Dependecies
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

// Styles
import {ColumnBox, Column} from '../styles/Column.style';
import {InfoBox, InfoLabel} from '../styles/Box.style';
import {TypeBox, Type} from '../styles/Types.style';
import {StatBox, StatLabel, StatBar, StatLevel} from '../styles/Stats.style';


const PokemonCard = () => {
    const {name} = useParams();
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        async function fetchData () {
            const response = await axios.get(url)
                .catch(error => alert(error));
            setPokemonData(response.data);
            console.log(response.data);
        }
        fetchData()
    }, [url]);



    return (
        <div>
            <header>
                {/* <h5>#{pokemonData.id.length === 1 ? ('00' + pokemonData.id) : (pokemonData.id.length === 2 ? ('0' + pokemonData.id) : pokemonData.id)}</h5> */}
                <h1>{pokemonData.name}</h1>
                {console.log(pokemonData)}
            </header>

            <ColumnBox>
                <Column>
                    {/* <img src={pokemonData.sprites.front_default} alt={name} /> */}

                    <InfoBox>
                        <InfoLabel>Characteristics</InfoLabel>
                        <h2>Height</h2> <p>{pokemonData.height / 10} m</p>
                        <br />
                        <h2>Weight</h2> <p>{pokemonData.weight / 10} kg</p>
                        <br />
                        <h2>Base experience</h2> <p>{pokemonData.base_experience }</p>
                    </InfoBox>
                </Column>    
                    
                <Column>
                    {/* TYPES */}
                    <InfoBox>
                        <InfoLabel>types</InfoLabel>
                        <TypeBox>
                            {pokemonData.types ? 
                                pokemonData.types.map(type => (
                                    <Type key={type.type.name} type={type.type.name}>{type.type.name}</Type>
                                ))
                                : <div></div>
                            }
                        </TypeBox>
                    </InfoBox>

                    {/* ABILITIES */}
                    <InfoBox>
                        <InfoLabel>abilities</InfoLabel>
                        {pokemonData.abilities ?
                            pokemonData.abilities.map(ability => (
                                <div key={ability.ability.name}>{ability.ability.name}</div>
                            ))
                            : <div></div>  
                        }
                    </InfoBox>

                    {/* MOVES */}
                    {/* moves:
                    {pokemonData.moves ?
                        pokemonData.moves.map(move => (
                            <div key={move.move.name}>{move.move.name}</div>
                        ))
                        : <div></div>  
                    }
                    <hr /> */}

                    {/* STATS */}
                    <InfoBox>
                        <InfoLabel>stats</InfoLabel>
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
                    </InfoBox>
                </Column>
            </ColumnBox>
        </div>
    );
};export default PokemonCard;
