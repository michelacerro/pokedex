// Dependencies
import React from 'react';
import {useSelector} from 'react-redux';

// Styels
import {TeamPage, TeamBox} from '../styles/TeamPage.style';

// Components
import Menu from '../components/Menu';
import TeamFullElement from '../components/TeamFullElement';
import TeamEmptyElement from '../components/TeamEmptyElement';


const MyTeam = () => {
    const teamList = useSelector(state => state.teamReducer.pokemon);

    return (
        <TeamPage>
            {/* <TeamSpace> */}
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
                            {teamList.map(team => (
                                <TeamFullElement key={team.id} data={team} />
                            ))}
                            <TeamEmptyElement /> 
                            <TeamEmptyElement /> 
                            <TeamEmptyElement /> 
                            <TeamEmptyElement /> 
                            <TeamEmptyElement />
                        </TeamBox>
                        : ( 
                        teamList.length === 2 ?
                            <TeamBox> 
                                {teamList.map(team => (
                                    <TeamFullElement key={team.id} data={team} />
                                ))}
                                <TeamEmptyElement /> 
                                <TeamEmptyElement /> 
                                <TeamEmptyElement /> 
                                <TeamEmptyElement />
                            </TeamBox>
                            : (
                            teamList.length === 3 ?
                                <TeamBox>
                                    {teamList.map(team => (
                                        <TeamFullElement key={team.id} data={team} />
                                    ))}
                                    <TeamEmptyElement /> 
                                    <TeamEmptyElement /> 
                                    <TeamEmptyElement />
                                </TeamBox>
                                : (
                                teamList.length === 4 ?
                                    <TeamBox> 
                                        {teamList.map(team => (
                                            <TeamFullElement key={team.id} data={team} />
                                        ))}
                                        <TeamEmptyElement /> 
                                        <TeamEmptyElement />
                                    </TeamBox>
                                    : (
                                    teamList.length === 5 ?
                                        <TeamBox> 
                                            {teamList.map(team => (
                                                <TeamFullElement key={team.id} data={team} />
                                            ))}
                                            <TeamEmptyElement />
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
            {/* </TeamSpace> */}
            <Menu />
        </TeamPage>
    );
};
export default MyTeam;