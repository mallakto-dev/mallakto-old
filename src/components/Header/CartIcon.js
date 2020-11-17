import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GlobalContext } from "../context/GlobalContextProvider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

const StyledDiv = styled.div`
  position: absolute;
  top: 22px;
  right: 60px;
  width: 3.5rem;
  margin: 0;
  text-align: center;

  @media (min-width: 768px) {
    position: relative;
    top: 10px;
    right: 0;
    z-index: 1;
    margin: 0;
  }
`

const StyledSpan = styled.span`
  height: 1.4rem;
  width: 1.4rem;
  background-color: #2b755e;
  border-radius: 50%;
  display: inline-block;
  color: #fffdfa;
  position: relative;
  top: -40px;
  left: 15px;
`

export const CartIcon = () => {
  const { cartItemsCount } = useContext(GlobalContext)

  return (
    <StyledDiv>
      <Link to="/cart" aria-label="Перейти в корзину с покупками">
        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
      </Link>
      <StyledSpan>{cartItemsCount}</StyledSpan>
    </StyledDiv>
  )
}
