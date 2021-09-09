// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';

// Styles
import {PreviewBox} from '../styles/Box.style';
import {ColumnBox, Column} from '../styles/Column.style';
import {TypeBox, Type} from '../styles/Types.style';

const PreviewCard = (props) => {
    const id = props.data.id.toString();

    return (
        <Link to={`/pokemon/${props.data.name}`} >
            <PreviewBox>
                <ColumnBox>
                    <Column>
                        <img src={props.data.sprites.front_default} alt={props.data.name} />
                    </Column>
                    <Column>
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
                    </Column>
                </ColumnBox>
            </PreviewBox>
        </Link>
    );
};
export default PreviewCard;