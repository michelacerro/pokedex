// Dependecies
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

// Icons
import {FiPlus} from 'react-icons/fi';
import {HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight} from 'react-icons/hi'

// Actions
import {addTeam} from '../actions';

// Styles
import {TypeBox, Type} from '../styles/Types.style';
import {StatBox, StatLabel, StatBar, StatLevel} from '../styles/Stats.style';
import {PokemonPage, PokemonCard, PokemonColumn, PokemonData, PokemonImage, AddButton, DataBox, DataTitle, DataLine,
    PokemonChange, PreviousPokemon, NextPokemon} from '../styles/PokemonPage.style';
// import {PokemonPage, PokemonColumn, PokemonData, DataBox, DataTitle, DataLine} from '../styles/PokemonPage.style';

// Components
import Menu from '../components/Menu';
import Identifiers from '../components/Identifiers';


const PokemonView = () => {
    const elementState = useSelector(state => state.elementReducer.pokemon);
    const teamState = useSelector(state => state.teamReducer.pokemon);
    
    const dispatch = useDispatch();
    const history = useHistory();
    const inMyTeam = () => {
        if (teamState.length >= 6) {alert('hai già sceleto tutti i pokemon')}
        else {
            dispatch(addTeam({
                id: elementState.id.toString(),
                name: elementState.name,
                image: elementState.sprites.other.dream_world.front_default
            }));
        }   
        history.push('/my-team');
    }


    return (
        <PokemonPage>
            <PokemonChange><PreviousPokemon><HiOutlineArrowCircleLeft /></PreviousPokemon></PokemonChange>
            <PokemonCard>
                <PokemonColumn>
                    <PokemonData>
                        <PokemonImage src={elementState.sprites.other.dream_world.front_default} alt={elementState.name} />
                        <Identifiers id={elementState.id.toString()} name={elementState.name} />
                        <AddButton onClick={inMyTeam}><FiPlus /> <span>Add to my Team</span></AddButton>
                    </PokemonData>
                    
                    {/* TYPES */}
                    <DataBox>
                        <DataTitle>types</DataTitle>
                        <TypeBox>
                            {elementState.types ? 
                                elementState.types.map(type => (
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
                        <DataLine><p>Height </p> <h3>{elementState.height / 10} m</h3></DataLine>
                        <DataLine><p>Weight </p> <h3>{elementState.weight / 10} kg</h3></DataLine>
                        <DataLine><p>Base experience </p> <h3>{elementState.base_experience }</h3></DataLine>
                    </DataBox>
                    
                    {/* STATS */}
                    <DataBox>
                        <DataTitle>stats</DataTitle>
                        {elementState.stats ?
                            elementState.stats.map(stat => (
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
                        {elementState.abilities ?
                            elementState.abilities.map(ability => (
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
};export default PokemonView;
