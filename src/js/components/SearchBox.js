// Dependencies
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';

// Icons
import {FiFilter, FiX} from 'react-icons/fi';

// Actions
import {openFilter, closeFilter} from '../actions';

// Styles
import {TypeBox, Type} from '../styles/Types.style';
import {SearchButton, FilterBox, ExitButton, FilterTitle, FilterInput, FilterTypes, 
    FilterButton, StartButton} from '../styles/Search.style';


const SearchBox = () => {
    const [typeList, setTypeList] = useState([]);

    useEffect(() => {
        async function typeData () {
            const response = await axios.get(`https://pokeapi.co/api/v2/type`)
                .catch(error => alert(error));
            setTypeList(response.data.results.filter(filtered => filtered.name !== 'dark' && filtered.name !== 'shadow' && filtered.name !== 'unknown'))
        };
        typeData()
    }, []);


    const dispatch = useDispatch();

    const openFilters = () => {
        dispatch(openFilter(true));
        document.querySelector('#filter-box').style.display = 'flex';

    };

    const closeFilters = () => {
        dispatch(closeFilter(false));
        document.querySelector('#filter-box').style.display = 'none';
    }

    const removeFilters = () => {
        console.log('buu');
    }

    const startResearch = () => {
        document.querySelector('#filter-box').style.display = 'none';
    }


    return (
        <div>
            <SearchButton onClick={openFilters}>
                <FiFilter />
            </SearchButton>
            <FilterBox id='filter-box'>
                <ExitButton onClick={closeFilters}>
                    <FiX />
                </ExitButton>

                {/* INPUT */}
                <FilterTitle>Search for name</FilterTitle>
                <FilterInput type='text' />

                {/* TYPES FILTER */}
                <FilterTitle>Search for type</FilterTitle>
                <FilterTypes>
                    <TypeBox>
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
