import React from 'react';
import { Link } from 'gatsby';
import logo from '../data/images/logo.svg';
import styled from 'styled-components';




const Logo = styled.img`
    width: 7rem;
`;

export const LogoBox = () => {
    return (
        <div>
            <Link to="/" >
                <Logo src={logo} alt={"логотип Маллакто"} />
            </Link>
        </div>
    )
}