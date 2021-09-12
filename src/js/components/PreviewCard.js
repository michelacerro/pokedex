// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';

// Styles
import {GlobalBox, ColumnBox, GeneralBox} from '../styles/Containers.style';
import {TypeBox, Type} from '../styles/Types.style';

// Components
import Identifiers from './Identifiers';


const PreviewCard = (props) => {
    // const id = props.data.id.toString();
    // console.log(props.data.sprites.other);

    return (
        <Link to={`/pokemon/${props.data.name}`} >
            <GeneralBox type='card'>
                <GlobalBox>
                    <ColumnBox width='forty' type='image'>
                        <img src={props.data.sprites.other.dream_world.front_default} alt={props.data.name} />
                    </ColumnBox>
                    <ColumnBox width='sixty'>
                        <Identifiers id={props.data.id.toString()} name={props.data.name} />
                        <br />
                        <br />

                        <TypeBox>
                            {props.data.types ? 
                                props.data.types.map(type => (
                                    <Type key={type.type.name} type={type.type.name} />
                                ))
                                : <div></div>
                            }
                        </TypeBox>
                    </ColumnBox>
                </GlobalBox>
            </GeneralBox>
        </Link>
    );
};
export default PreviewCard;