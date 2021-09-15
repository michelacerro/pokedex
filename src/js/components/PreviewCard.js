// Dependencies
import React from 'react';

// Styles
import {TypeBox, Type} from '../styles/Types.style';
import {PreviewLink, PreviewBox, PreviewImage, PreviewInfo, PreviewBalls} from '../styles/Preview.style';

// Components
import Identifiers from './Identifiers';

// Icons
import {CgPokemon} from 'react-icons/cg';


const PreviewCard = (props) => {
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
                        <CgPokemon />
                    </PreviewBalls>
                </PreviewInfo>
            </PreviewBox>
        </PreviewLink>
    );
};
export default PreviewCard;