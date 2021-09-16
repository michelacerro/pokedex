// Dependencies
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

// Icons
import {CgPokemon} from 'react-icons/cg';

// Styles
import {TypeBox, Type} from '../styles/Types.style';
import {PreviewLink, PreviewBox, PreviewImage, PreviewInfo, PreviewBalls} from '../styles/Preview.style';

// Components
import Identifiers from './Identifiers';


const PreviewCard = (props) => {
    const teamList = useSelector(state => state.teamReducer.pokemon);
    const [team, setTeam] = useState([]);

    useEffect(() => {
        setTeam(teamList.map(teamElement => teamElement.id));
    }, [teamList]);

    return (
        <PreviewLink to={`/pokemon/${props.data.name}`} >
            <PreviewBox>
                <PreviewImage src={props.data.sprites.other.dream_world.front_default} alt={props.data.name} />
                <PreviewInfo>
                    <Identifiers id={props.data.id.toString()} name={props.data.name} />
                    <br />
                    <PreviewBalls>
                        <TypeBox>
                            {props.data.types ? 
                                props.data.types.map(type => (
                                    <Type key={type.type.name} type={type.type.name} />
                                ))
                                : <div></div>
                            }
                        </TypeBox>
                        {team.includes(props.data.id.toString()) ? <CgPokemon /> : <div></div> }
                    </PreviewBalls>
                </PreviewInfo>
            </PreviewBox>
        </PreviewLink>
    );
};
export default PreviewCard;