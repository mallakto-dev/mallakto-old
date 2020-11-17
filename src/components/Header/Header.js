import React, { useState } from "react"
import styled from "styled-components"

import { LogoBox } from "../LogoBox"
import { CartIcon } from "./CartIcon"
import { Menu } from "./Menu"
import { NavIconMobile } from "./NavIconMobile"

const StyledHeader = styled.header`
  width: 100%;
  padding: 1rem;
  margin-bottom: 4rem;
  border-bottom: 1px solid #004530;
  background-color: #fffdfa;
  position: sticky;
  top: 0;
  z-index: 5;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
`

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const clickHandler = () => {
    setMenuOpen(false) // closing menu on mobile after click on list item
  }

  return (
    <StyledHeader>
      <LogoBox />
      <Menu isMenuOpen={menuOpen} handleClick={clickHandler} />
      <CartIcon />
      <NavIconMobile handleClick={toggleMenu} showClose={menuOpen} />
    </StyledHeader>
  )
}
