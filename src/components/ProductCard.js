import React, { useContext } from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { priceToRubles } from "../utils/priceToRubles"
import { GlobalContext } from "./context/GlobalContextProvider"

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
`

const StyledDiv = styled.div`
  height: 9.625rem;
`

const StyledParagraph = styled.p`
  margin: 0.6rem 0;
`

const StyledBtnBig = styled.button`
  width: 70%;
  height: 3rem;
  border: none;
  background-color: #004530;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  padding: 2px;
  margin: 1rem auto;


  @media(min-width: 768px) {
    font-size: .9rem
  }

  &:hover {
    opacity: .8;
  }

`

export const ProductCard = ({ id ,title, price, weight, image, altText, linkTo }) => {

  const { addToCart } = useContext(GlobalContext);

  const priceInRub = priceToRubles(price);

  const handleClick = () => {
    addToCart({
      id,
      title,
      price,
      weight,
      image,
      altText,
      quantity: 1
    })
  }

  return (
    <StyledListItem>
      <Link to={linkTo}>
      <Image fluid={image} alt={altText} />
      </Link>
      <StyledDiv>
        <h3>{title}</h3>
        <StyledParagraph>{weight}</StyledParagraph>
        <StyledParagraph>{priceInRub}</StyledParagraph>
      </StyledDiv>
      <StyledBtnBig onClick={handleClick}>
        {" "}
        Добавить в корзину <FontAwesomeIcon icon={faShoppingCart} />
      </StyledBtnBig>
    </StyledListItem>
  )
}
