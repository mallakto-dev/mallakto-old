import React, { useState } from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

const StyledNav = styled.nav`
  display: ${props => (props.isShown ? "flex" : "none")};
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: rgb(244 185 169);
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;

  @media (min-width: 768px) {
    display: block;
    position: relative;
    background-color: #fffdfa;
  }
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  color: #004530;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    line-height: 3;
  }
`

const ListItem = styled.li`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    width: 8rem;
    text-align: center;
  }
`

const ListItemDropdown = styled(ListItem)`
  & ul {
    display: ${props => props.isDropdownOpen ? "flex" : "none"};
  }


  @media (min-width: 768px) {
    position: relative;
    z-index: 10;

    & ul {
    display: none;
  }

  &:focus-within > ul, // lots of styles, for better navigation from the keyboard
  & ul:hover,
  &:hover ul,
  & ul:focus {
    display: ${props => props.isDropdownOpen ? "flex" : "none"};
  }


  }
`

const SubList = styled(List)`
  margin-top: 0.5rem;
  list-style: square;
  padding: 1rem;
  transform: translateX(1rem);
  font-size: 1.2rem;

  @media (min-width: 768px) {
    font-size: 0.9rem;
    flex-direction: column;
    position: absolute;
    left: 0rem;
    top: 2rem;
    background-color: #fffdfa;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    border-top: 2px solid #004530;
    width: 14rem;
    padding: 0;
    list-style: none;

    & li {
      width: 100%;

      &:hover,
      &:focus-within {
        background-color: #004530;

        a {
          color: white;
        }
      }
    }
  }
`

export const Menu = ({ isMenuOpen, handleClick }) => {
  const data = useStaticQuery(graphql`
    {
      allSanityCategory {
        edges {
          node {
            _id
            title
            index
            slug {
              current
            }
            description
          }
        }
      }
    }
  `)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    // for better UX on mobile
  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const sortedCategories = data.allSanityCategory.edges.sort((a,b) => a.node.index - b.node.index)

  const categories = sortedCategories.map(({ node: category }) => {
    return (
      <ListItem key={category._id} onClick={handleClick} role="none">
        <Link
          to={`/products/${category.slug.current}`}
          role="menuitem"
        >
          {category.title}
        </Link>
      </ListItem>
    )
  })
 
  // return of Menu component
  return (
    <StyledNav isShown={isMenuOpen} role="navigation" id="navigation">
      <List role="menubar">
        <ListItem onClick={handleClick} role="none">
          <Link tabIndex="0" to="/" role="menuitem">
            Главная
          </Link>
        </ListItem>
        <ListItemDropdown role="none" isDropdownOpen={isDropdownOpen} onClick={handleDropdownClick}>
          <Link
            tabIndex="0"
            to="#"
            role="menuitem"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen ? true : false}
            
          >

            Продукция
          </Link>
          <SubList role="menu" aria-label="Продукция">
            {categories}
          </SubList>
        </ListItemDropdown>
        <ListItem onClick={handleClick} role="none">
          <Link tabIndex="0" to="/about" role="menuitem">
            О нас
          </Link>
        </ListItem>
        <ListItem onClick={handleClick} role="none">
          <Link tabIndex="0" to="/contacts" role="menuitem">
            Контакты
          </Link>
        </ListItem>
        <ListItem onClick={handleClick} role="none">
          <Link tabIndex="0" to="/cart" aria-label="Корзина" role="menuitem">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          </Link>
        </ListItem>
      </List>
    </StyledNav>
  )
}
