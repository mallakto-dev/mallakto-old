import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const StyledNav = styled.nav`
    display: ${props => props.isShown ? 'flex' : 'none' };
    position: fixed;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #6dbd96;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;


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
       z-index: 10;
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
        left: 0rem;
        top: 2rem;
        background-color: #fffdfa;
        box-shadow: 0 6px 12px rgba(0,0,0,.175);
        border-top: 2px solid #004530;
        width: 14rem;
        padding: 0;
        list-style: none; 

        & li {
            width: 100%;

            &:hover {
            background-color: #004530;

            a {
                color: white;
            }
        }

        }

    }
`;


export const Menu = ( {isOpen} ) => {

    const data = useStaticQuery(graphql`
    {
        allSanityCategory {
            edges {
                node {
                    _id
                    title
                    slug {
                        current
                    }
                    description
                }
            }
      }
    }
    `);

    const categories = data.allSanityCategory.edges.map(({node: category}) => {

        if(category.title === 'Окара') {
            // maybe not the most slick decision, but I think it's good to keep categories names short in api
            return (
                <ListItem key={category._id}>
                    <Link to={`/${category.slug.current}`}>{category.description}</Link>
                </ListItem>
            )
        }

        return (
            <ListItem key={category._id}>
                <Link to={`/${category.slug.current}`}>{category.title}</Link>
            </ListItem>
        )
    })

    return (
        <StyledNav isShown={isOpen} >
            <List>
                <ListItem>
                    <Link to="/">Главная</Link>
                </ListItem>
                <ListItemDropdown>
                    Продукция
                        <SubList>
                            { categories }
                        </SubList>
                </ListItemDropdown>
                <ListItem>
                    <Link to="/about">О нас</Link>
                </ListItem>
                <ListItem>
                    <Link to="/contacts">Контакты</Link>
                </ListItem>
                <ListItem>
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
                    </Link>
                </ListItem>
            </List>
        </StyledNav>
    );
}