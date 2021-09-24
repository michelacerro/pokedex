// Dependencies
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

// Icons
import {FiFilter, FiX, FiSearch} from 'react-icons/fi';

// Actions
import {openFilter, closeFilter, addText, deleteText, saveWarning, deleteWarning, addType, deleteType} from '../actions';

// Styles
import {TypeBox, Type} from '../styles/Types.style';
import {SearchButton, FilterBox, ExitButton, FilterTitle, FilterForm, FilterInput, InputButton, FilterTypes, 
    FilterButton} from '../styles/Search.style';


const SearchBox = () => {
    const dispatch = useDispatch();


    // ----- create list for type box
    const [typeList, setTypeList] = useState([]);
    useEffect(() => {
        async function typeData () {
            const response = await axios.get(`https://pokeapi.co/api/v2/type`)
                .catch(error => alert(error));
            setTypeList(response.data.results.filter(filtered => filtered.name !== 'dark' && filtered.name !== 'shadow' && filtered.name !== 'unknown'))
        };
        typeData()
    }, []);
    

    // ----- open/close filters box
    const openFilters = () => {
        dispatch(openFilter(true));
        document.querySelector('#filter-box').style.display = 'flex';

    };
    const closeFilters = () => {
        dispatch(closeFilter(false));
        document.querySelector('#filter-box').style.display = 'none';
    };


    // ----- add/remove search filters
    const listState = useSelector(state => state.listReducer.pokemon);

    const [text, setText] = useState('');
    const pokemonForText = [];
    const searchForText = (e) => {
        e.preventDefault();
        if (text.trim() === '') {
            return alert('Please, write something');
        }
        
        dispatch(deleteText());
        dispatch(deleteWarning());
        dispatch(deleteType());

        listState.map(list => list.map(pokemon => {
            const poke = pokemon;
            if (pokemon.name.includes(text)) {pokemonForText.push(poke)}
            else {dispatch(saveWarning(text))};
            return poke;
        }))
        dispatch(addText(pokemonForText));

        setText('');
        dispatch(closeFilter(false));
        document.querySelector('#filter-box').style.display = 'none';
    }

    const pokemonForType = [];
    const searchForType = (e) => {
        dispatch(deleteText());
        dispatch(deleteWarning());
        dispatch(deleteType());

        listState.map(list => list.map(pokemon => {
            const poke = pokemon;
            pokemon.types.map(type => type.type.name === e.target.textContent ? pokemonForType.push(poke) : '');
            return poke;
         }));
        dispatch(addType(pokemonForType));

        dispatch(closeFilter(false));
        document.querySelector('#filter-box').style.display = 'none';
    };

    const removeFilters = () => {
        dispatch(deleteText());
        dispatch(deleteWarning());
        dispatch(deleteType());

        dispatch(closeFilter(false));
        document.querySelector('#filter-box').style.display = 'none';
    };


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
                <FilterForm onSubmit={searchForText}>
                    <FilterInput type='text' value={text} onChange={(e) => setText(e.target.value)} />
                    <InputButton><FiSearch /></InputButton>
                </FilterForm>

                {/* TYPES FILTER */}
                <FilterTitle>Search for type</FilterTitle>
                <FilterTypes>
                    <TypeBox justify={'center'}>
                        {typeList.map(type => <Type key={type.name} type={type.name} onClick={searchForType}>{type.name}</Type>)} 
                    </TypeBox>
                </FilterTypes>

                <FilterButton onClick={removeFilters}>Remove filters</FilterButton>
            </FilterBox>
        </div>
    );    
};
export default SearchBox;
