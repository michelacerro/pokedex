// Dependecies
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

// Styles
import {GlobalBox, ColumnBox, GeneralBox, BoxTitle} from '../styles/Containers.style';
import {TypeBox, Type} from '../styles/Types.style';
import {StatBox, StatLabel, StatBar, StatLevel} from '../styles/Stats.style';

// Components
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
            console.log(response.data.sprites.other);
        }
        fetchData()
    }, [url]);

    return (
        <GlobalBox>
            <ColumnBox width='fifty'>
                <ColumnBox width='full'>
                    <ColumnBox width='full'>
                        {/* <img src={pokemonData.sprites.front_default} alt={name} /> */}
                    </ColumnBox>
                    <ColumnBox width='full'>
                        {/* <Identifiers id={pokemonData.id.toString()} name={pokemonData.name} /> */}
                    </ColumnBox>
                </ColumnBox>
                

                <GeneralBox type='info'>
                    <BoxTitle>info</BoxTitle>
                    <h2>Height</h2> <p>{pokemonData.height / 10} m</p>
                    <br />
                    <h2>Weight</h2> <p>{pokemonData.weight / 10} kg</p>
                    <br />
                    <h2>Base experience</h2> <p>{pokemonData.base_experience }</p>
                </GeneralBox>
            </ColumnBox>    
                
            <ColumnBox width='fifty'>
                {/* TYPES */}
                <GeneralBox type='info'>
                    <BoxTitle>types</BoxTitle>
                    <TypeBox>
                        {pokemonData.types ? 
                            pokemonData.types.map(type => (
                                <Type key={type.type.name} type={type.type.name}>{type.type.name}</Type>
                            ))
                            : <div></div>
                        }
                    </TypeBox>
                </GeneralBox>

                {/* ABILITIES */}
                <GeneralBox type='info'>
                    <BoxTitle>abilities</BoxTitle>
                    {pokemonData.abilities ?
                        pokemonData.abilities.map(ability => (
                            <div key={ability.ability.name}>{ability.ability.name}</div>
                        ))
                        : <div></div>  
                    }
                </GeneralBox>

                {/* STATS */}
                <GeneralBox type='info'>
                    <BoxTitle>stats</BoxTitle>
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
                </GeneralBox>
            </ColumnBox>
        </GlobalBox>
    );
};export default PokemonCard;
