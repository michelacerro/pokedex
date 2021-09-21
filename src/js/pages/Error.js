// Dependencies
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Icons
import {HiArrowNarrowRight} from 'react-icons/hi';

// Styles
import {ErrorPage, ErrorBox, ErrorTextBox, ErrorText, ErrorTyping1, ErrorTyping2, 
    ErrorLink, ErrorImage} from '../styles/ErrorPage.style';

    
const Error = () => {
     const [image, setImage] = useState('');

    useEffect(() => {
        async function fetchData () {
            const id = Math.floor(Math.random()*152) + 1;
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .catch(error => alert(error));
            setImage(response.data.sprites.other.dream_world.front_default);
         };
        fetchData()
    }, []);


    return(
        <ErrorPage>
            <ErrorBox>
                <ErrorTextBox>
                    <div><ErrorTyping1><ErrorText>Page not found.</ErrorText></ErrorTyping1></div>
                    <div><ErrorTyping2><ErrorText>
                            <HiArrowNarrowRight /> Return to <ErrorLink to='/pokedex'>Pokédex</ErrorLink>.
                    </ErrorText></ErrorTyping2></div>
                </ErrorTextBox>
                <ErrorImage src={image} alt='' />
            </ErrorBox>
        </ErrorPage>
    );
};
export default Error;