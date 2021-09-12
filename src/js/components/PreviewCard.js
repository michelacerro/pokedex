// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';

// Styles
import {GlobalBox, ColumnBox, GeneralBox} from '../styles/Containers.style';
import {TypeBox, Type} from '../styles/Types.style';

const PreviewCard = (props) => {
    const id = props.data.id.toString();
    // console.log(props.data.sprites.other);

    return (
        <Link to={`/pokemon/${props.data.name}`} >
            <GeneralBox type='card'>
                <GlobalBox>
                    <ColumnBox width='forty' type='image'>
                        <img src={props.data.sprites.other.dream_world.front_default} alt={props.data.name} />
                    </ColumnBox>
                    <ColumnBox width='sixty'>
                        <h4># {id.length === 1 ? ('00' + id) : (id.length === 2 ? ('0' + id) : id)}</h4>
                        <br />
                        <h1>{props.data.name}</h1>
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