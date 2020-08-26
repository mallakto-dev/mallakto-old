import React from 'react';

import logo from '../data/images/logo.svg';
import styled from 'styled-components';



const Logo = styled.img`
    width: 7rem;
`;

export const LogoBox = () => {
    return (
        <div>
            <Logo src={logo} alt={logo} />
        </div>
    )
}