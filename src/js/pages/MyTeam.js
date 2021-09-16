// Dependencies
import React from 'react';
import {useSelector} from 'react-redux';

// Styels
import {TeamPage, TeamSpace, TeamBox} from '../styles/TeamPage.style';

// Components
import Menu from '../components/Menu';
import TeamFullElement from '../components/TeamFullElement';
import TeamEmptyElement from '../components/TeamEmptyElement';


const MyTeam = () => {
    const teamList = useSelector(state => state.teamReducer.pokemon);

    return (
        <TeamPage>
            <Menu />
            <TeamSpace>
                {teamList.length === 0 ? 
                    <TeamBox>
                        <TeamEmptyElement /> 
                        <TeamEmptyElement /> 
                        <TeamEmptyElement /> 
                        <TeamEmptyElement /> 
                        <TeamEmptyElement /> 
                        <TeamEmptyElement /> 
                    </TeamBox>
                    : ( 
                    teamList.length === 1 ?
                        <TeamBox>
                            <TeamEmptyElement /> 
                            <TeamEmptyElement /> 
                            <TeamEmptyElement /> 
                            <TeamEmptyElement /> 
                            <TeamEmptyElement /> 
                            {teamList.map(team => (
                                <TeamFullElement key={team.id} data={team} />
                            ))}
                        </TeamBox>
                        : ( 
                        teamList.length === 2 ?
                            <TeamBox>
                                <TeamEmptyElement /> 
                                <TeamEmptyElement /> 
                                <TeamEmptyElement /> 
                                <TeamEmptyElement /> 
                                {teamList.map(team => (
                                    <TeamFullElement key={team.id} data={team} />
                                ))}
                            </TeamBox>
                            : (
                            teamList.length === 3 ?
                                <TeamBox>
                                    <TeamEmptyElement /> 
                                    <TeamEmptyElement /> 
                                    <TeamEmptyElement /> 
                                    {teamList.map(team => (
                                        <TeamFullElement key={team.id} data={team} />
                                    ))}
                                </TeamBox>
                                : (
                                teamList.length === 4 ?
                                    <TeamBox>
                                        <TeamEmptyElement /> 
                                        <TeamEmptyElement /> 
                                        {teamList.map(team => (
                                            <TeamFullElement key={team.id} data={team} />
                                        ))}
                                    </TeamBox>
                                    : (
                                    teamList.length === 5 ?
                                        <TeamBox>
                                            <TeamEmptyElement /> 
                                            {teamList.map(team => (
                                                <TeamFullElement key={team.id} data={team} />
                                            ))}
                                        </TeamBox>
                                        :
                                        <TeamBox>
                                            {teamList.map(team => (
                                                <TeamFullElement key={team.id} data={team} />
                                            ))}
                                        </TeamBox>
                                    )
                                )
                            )
                        )
                    )
                }
            </TeamSpace>
        </TeamPage>
    );
};
export default MyTeam;