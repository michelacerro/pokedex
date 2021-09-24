// Dependecies
import React, {useState} from 'react';

// Icons
import {FiMenu, FiMinus} from 'react-icons/fi';
import {MdMoreHoriz} from 'react-icons/md';

// Styles
import {MenuButton, MenuBox, MenuLink} from '../styles/Menu.style';


const Menu = () => {
    const [open, setOpen] = useState(false);

    const showMenu = () => {
        setOpen(!open);
        if (!open) {document.querySelector('#menu-box').style.display = 'flex';}
        else {document.querySelector('#menu-box').style.display = 'none';};
    };


    return (
        <>
            <MenuButton onClick={showMenu}>
                {open ? <FiMinus /> : <FiMenu />}
            </MenuButton>
                <MenuBox id='menu-box'>
                    <MenuLink to='/'>Home</MenuLink>
                    <MdMoreHoriz />
                    <MenuLink to='/pokedex'>Pokédex</MenuLink>
                    <MdMoreHoriz />
                    <MenuLink to='/my-team'>My Team</MenuLink>
                </MenuBox>
        </>
    );
};
export default Menu;