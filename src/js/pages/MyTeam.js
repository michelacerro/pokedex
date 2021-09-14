// Dependencies
import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

// Styels
import {TeamPage} from '../styles/Pages.style';

// Components
import TeamFullElement from '../components/TeamFullElement';
import TeamEmptyElement from '../components/TeamEmptyElement';


const MyTeam = () => {
    const teamList = useSelector(state => state.teamReducer.pokemon);

    return (
        <>

        {teamList.length === 0 ? 
            <TeamPage>
                <TeamEmptyElement /> 
                <TeamEmptyElement /> 
                <TeamEmptyElement /> 
                <TeamEmptyElement /> 
                <TeamEmptyElement /> 
                <TeamEmptyElement /> 
            </TeamPage>
            : ( 
            teamList.length === 1 ?
                <TeamPage>
                    <TeamEmptyElement /> 
                    <TeamEmptyElement /> 
                    <TeamEmptyElement /> 
                    <TeamEmptyElement /> 
                    <TeamEmptyElement /> 
                    {teamList.map(team => (
                        <TeamFullElement key={team.id} data={team} />
                    ))}
                </TeamPage>
                : ( 
                teamList.length === 2 ?
                    <TeamPage>
                        <TeamEmptyElement /> 
                        <TeamEmptyElement /> 
                        <TeamEmptyElement /> 
                        <TeamEmptyElement /> 
                        {teamList.map(team => (
                            <TeamFullElement key={team.id} data={team} />
                        ))}
                    </TeamPage>
                    : (
                    teamList.length === 3 ?
                        <TeamPage>
                            <TeamEmptyElement /> 
                            <TeamEmptyElement /> 
                            <TeamEmptyElement /> 
                            {teamList.map(team => (
                                <TeamFullElement key={team.id} data={team} />
                            ))}
                        </TeamPage>
                        : (
                        teamList.length === 4 ?
                            <TeamPage>
                                <TeamEmptyElement /> 
                                <TeamEmptyElement /> 
                                {teamList.map(team => (
                                    <TeamFullElement key={team.id} data={team} />
                                ))}
                            </TeamPage>
                            : (
                            teamList.length === 5 ?
                                <TeamPage>
                                    <TeamEmptyElement /> 
                                    {teamList.map(team => (
                                        <TeamFullElement key={team.id} data={team} />
                                    ))}
                                </TeamPage>
                                :
                                <TeamPage>
                                    {teamList.map(team => (
                                        <TeamFullElement key={team.id} data={team} />
                                    ))}
                                </TeamPage>
                            )
                        )
                    )
                )
            )
        }
        
        <Link to='/pokedex'>Pokédex</Link>
        </>
    );
};
export default MyTeam;