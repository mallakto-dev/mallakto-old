import React from 'react';
import styled from 'styled-components';

import { SocialLinks } from './SocialLinks';
import { ContactDetails } from './ContactDetails';
import { LogoBox } from '../LogoBox'; 


const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    width: 100%;
    background-color: #6dbd96; /*  #004530*/
`;


export const Footer = () =>  {
    return (
        <StyledFooter>
            <LogoBox />
            <ContactDetails />
            <SocialLinks />
        </StyledFooter>
    )
}