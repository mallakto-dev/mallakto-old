import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { priceToRubles } from "../../utils/priceToRubles"

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

`

export const ProductCard = ({ title, price, weight, image, altText, linkTo }) => {

  const priceInRub = priceToRubles(price);

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
      <StyledBtnBig>
        {" "}
        Добавить в корзину <FontAwesomeIcon icon={faShoppingCart} />
      </StyledBtnBig>
    </StyledListItem>
  )
}
