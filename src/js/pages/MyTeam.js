// Dependencies
import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

// Components
import TeamFullElement from '../components/TeamFullElement';
import TeamEmptyElement from '../components/TeamEmptyElement';


const MyTeam = () => {
    const teamList = useSelector(state => state.teamReducer.pokemon);

    return (
        <>
        {teamList.length === 0 ? 
            <TeamEmptyElement /> 
            : 
            <div>
                {teamList.map(team => (
                    <TeamFullElement key={team.id} data={team} />
                ))}
            </div>
        }
        <Link to='/pokedex'>Pokédex</Link>
        </>
    );
};
export default MyTeam;