// Dependencies
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Styles
import {TypeBox, Type} from '../styles/Types.style';
import {SearchButton, FilterBox, ExitBox, FilterTitle, FilterInput, FilterTypes, FilterButton, StartButton} from '../styles/Search.style';

// Icons
import {FiFilter, FiX} from 'react-icons/fi';


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


    const [open, setOpen] = useState(false);

    const openFilters = () => {
        setOpen(true);
        document.querySelector('#filter-box').style.display = 'flex';
    };

    const closeFilters = () => {
        setOpen(false);
        document.querySelector('#filter-box').style.display = 'none';
    }

    const removeFilters = () => {
        console.log(open);
    }

    const startResearch = () => {
        if (open) {document.querySelector('#filter-box').style.display = 'none'}
    }

    return (
        <div>
            <SearchButton onClick={openFilters}>
                <FiFilter />
            </SearchButton>
            <FilterBox id='filter-box'>
                <ExitBox>
                    <SearchButton onClick={closeFilters}>
                        <FiX />
                    </SearchButton>
                </ExitBox>

                {/* INPUT */}
                <FilterTitle>Search for name</FilterTitle>
                <FilterInput type='text' />

                {/* TYPES FILTER */}
                <FilterTitle>Search for type</FilterTitle>
                <FilterTypes>
                    <TypeBox >
                        {typeList.map(type => <Type key={type.name} type={type.name}>{type.name}</Type>)} 
                    </TypeBox>
                </FilterTypes>

                <FilterButton onClick={removeFilters}>Remove filters</FilterButton>
                <FilterTitle><StartButton onClick={startResearch}>Start research</StartButton></FilterTitle>
            </FilterBox>
        </div>
    );    
};
export default SearchBox;
