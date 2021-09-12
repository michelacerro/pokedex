//  Dependencies
import React from 'react';


const Identifiers = (props) => {
    return (
        <>
            <h4># {props.id.length === 1 ? ('00' + props.id) : (props.id.length === 2 ? ('0' + props.id) : props.id)}</h4>
            <br />
            <h1>{props.name}</h1>
        </>
    );
};
export default Identifiers;