//  Dependencies
import React from 'react';


const Identifiers = (props) => {
    return (
        <div>
            <h5># {props.id.length === 1 ? ('00' + props.id) : (props.id.length === 2 ? ('0' + props.id) : props.id)}</h5>
            <h2>{props.name}</h2>
        </div>
    );
};
export default Identifiers;