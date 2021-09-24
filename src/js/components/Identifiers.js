//  Dependencies
import React from 'react';

// Styles
import {IdentifierComponent} from '../styles/IdentifierComponent.style';

const Identifiers = (props) => {
    return (
        <IdentifierComponent>
            <h5># {props.id.length === 1 ? ('00' + props.id) : (props.id.length === 2 ? ('0' + props.id) : props.id)}</h5>
            <h2>{props.name}</h2>
        </IdentifierComponent>
    );
};
export default Identifiers;