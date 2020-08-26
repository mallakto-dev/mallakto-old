import React, {  useState } from 'react';
import styled from 'styled-components';

import { LogoBox } from '../LogoBox';
import { Menu } from './Menu';
import { NavIconMobile } from './NavIconMobile';



const StyledHeader = styled.header`

    width: 100%;
    padding: 1rem;
    margin-bottom: 4rem;
    border-bottom: 1px solid #004530;

        @media(min-width: 768px) {
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }

`;

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = (e) => {
        e.preventDefault();

        setMenuOpen(!menuOpen);
    }

    return (
        <StyledHeader>
            <LogoBox />
            <Menu isOpen={menuOpen}/>
            <NavIconMobile handleClick={toggleMenu} showClose={menuOpen} />
        </StyledHeader>
    )
}