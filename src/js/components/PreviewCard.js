// Dependencies
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Icons
import {CgPokemon} from 'react-icons/cg';

// Styles
import {TypeBox, Type} from '../styles/Types.style';
import {PreviewLink, PreviewBox, PreviewImage, PreviewInfo, PreviewBalls} from '../styles/Preview.style';

// Components
import Identifiers from './Identifiers';

// Actions
import {addElement, deleteElement} from '../actions';


const PreviewCard = (props) => {
    const pokemonData = props.data;

    // ----- check for pokemon in team
    const teamState = useSelector(state => state.teamReducer.pokemon);
    const [team, setTeam] = useState([]);

    useEffect(() => {
        setTeam(teamState.map(teamElement => teamElement.id));
    }, [teamState]);

    // ----- save pokemon data
    const dispatch = useDispatch();
    const savePokemon = () => {
        dispatch(deleteElement());
        dispatch(addElement(pokemonData));
    }


    return (
        <PreviewLink to={`/pokedex/pokemon/${pokemonData.name}`} >
            <PreviewBox onClick={savePokemon}>
                <PreviewImage src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} />
                <PreviewInfo>
                    <Identifiers id={pokemonData.id.toString()} name={pokemonData.name} />
                    <br />
                    <PreviewBalls>
                        <TypeBox>
                            {pokemonData.types ? 
                                pokemonData.types.map(type => (
                                    <Type key={type.type.name} type={type.type.name} />
                                ))
                                : <div></div>
                            }
                        </TypeBox>
                        {team.includes(pokemonData.id.toString()) ? <CgPokemon /> : <div></div> }
                    </PreviewBalls>
                </PreviewInfo>
            </PreviewBox>
        </PreviewLink>
    );
};
export default PreviewCard;