import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const StyledNav = styled.nav`
    display: ${props => props.isShown ? 'flex' : 'none' };
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #6dbd96;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;


    @media(min-width: 768px) {
        display: block;
        position: relative;
        background-color:  #fffdfa;
        
  }
`;


const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
    color: #004530;

    @media(min-width: 768px) {
        font-size: 1rem;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        line-height: 3;
    }
`;

const ListItem = styled.li`
    margin-bottom: 1rem;

    @media(min-width: 768px) {
       margin-bottom: 0;
       width: 8rem;
       text-align: center;
  }

`;

const ListItemDropdown = styled(ListItem)`
    & ul {
        display: none;
    }

    &:hover ul {
        display: flex;
    }

    @media(min-width: 768px) {
       position: relative;
  }
`;

const SubList = styled(List)`
    margin-top: .5rem;
    list-style: square;
    padding: 1rem;
    transform: translateX(1rem);
    font-size: 1.2rem;

        @media(min-width: 768px) {
        font-size: .9rem;
        flex-direction: column;
        position: absolute;
        left: 1rem;
        top: 1.8rem;
        background-color:  #6dbd96;
        width: 14rem;
        padding: 0;
        list-style: none; 

        & li {
            width: 100%;

            &:hover {
            background-color: #72b056;
        }

        }

    }
`;


export const Menu = ( {isOpen} ) => {
    return (
        <StyledNav isShown={isOpen} >
            <List>
                <ListItem>
                    <Link to="/">Главная</Link>
                </ListItem>
                <ListItemDropdown>
                    Продукция
                        <SubList>
                            <ListItem>
                                <Link to="/">Тофу</Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/">Сейтан</Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/">Продукты из окары</Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/">Сухие смеси</Link>
                            </ListItem>
                        </SubList>
                </ListItemDropdown>
                <ListItem>
                    <Link to="/">Контакты</Link>
                </ListItem>
                <ListItem>
                    <FontAwesomeIcon icon={faShoppingCart} pull="right" />
                </ListItem>
            </List>
        </StyledNav>
    );
}