// Dependencies
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Styles
import {TypeBox, Type} from '../styles/Types.style';


const SearchBox = () => {
    const [typeList, setTypeList] = useState([]);
    const url = 'casa';

    useEffect(() => {
        async function typeData () {
            const response = await axios.get(`https://pokeapi.co/api/v2/type`)
                .catch(error => alert(error));
            setTypeList(response.data.results);
        };
        typeData()
    }, [url]);

    return (
        <div>
            <input type='text' />

            {/* TYPE FILTER */}
            <TypeBox >
                {typeList.map(type => <Type key={type.name} type={type.name}>{type.name}</Type>)} 
            </TypeBox>
        </div>
    );    
};
export default SearchBox;
