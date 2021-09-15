// Dependencies
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Styles
import {ErrorPage, ErrorBox, ErrorTextBox, ErrorText, ErrorTyping1, ErrorTyping2, ErrorLink, ErrorImage} from '../styles/ErrorPage.style';

// Icons
import {HiArrowNarrowRight} from 'react-icons/hi';


const Error = () => {
    const [image, setImage] = useState('');
    const id = Math.floor(Math.random()*152) + 1;
    console.log('id' + id);
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    useEffect(() => {
        async function fetchData () {
            const response = await axios.get(url)
                .catch(error => alert(error));
                console.log('ID' + response.data.id);
                setImage(response.data.sprites.other.dream_world.front_default);
         };
        fetchData()
    }, [url]);

    return(
        <ErrorPage>
            <ErrorBox>
                <ErrorTextBox>
                    <p><ErrorTyping1><ErrorText>Page not found.</ErrorText></ErrorTyping1></p>
                    <p><ErrorTyping2><ErrorText>
                        <HiArrowNarrowRight /> Return to <ErrorLink to='/pokedex'>Pokédex</ErrorLink>.
                    </ErrorText></ErrorTyping2></p>
                </ErrorTextBox>
                <ErrorImage src={image} alt='' />
            </ErrorBox>
        </ErrorPage>
    );
};
export default Error;