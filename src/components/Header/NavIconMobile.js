import React from 'react';
import styled from 'styled-components';




const Sandwich = styled.div`
    position: absolute;
    top: 30px;
    right: 10px;
    cursor: pointer;
    width: 2rem;
    height: .4rem;
    background-color: #004530;
    transition: all ease-out .3s;
    transform: ${props => props.showClose ? " rotate(45deg) translate(-.1rem,-.4rem)" : "none"};

    &::before, &::after {
        content: "";
        width: 2rem;
        height: .4rem;
        background-color: #004530;
        transition: all ease-out .3s;
    }

    &::before {
        display: block;
        transform: ${props => props.showClose ? "rotate(-90deg)" : "translate(0,-.7rem)"};
    }

    &::after{
        transform: translate(0,.3rem);
        display: ${props => props.showClose ? "none" : "block"};
    }

    @media(min-width: 768px) {
        display: none;
  }

`;

export const NavIconMobile = ({ handleClick, showClose }) => {
    return  <Sandwich onClick={handleClick} showClose={showClose}/> 
}