import React, { useContext, useState } from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { SEO } from "../components/SEO"
import { QuantityPicker } from "../components/QuantityPicker"
import { priceToRubles } from "../utils/priceToRubles"
import { GlobalContext } from "../components/context/GlobalContextProvider"

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2rem;

  & > * {
    /*  hack for gatsby-image, without flex-grow image disappears on a big screens */
    flex-grow: 1;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    margin: 0;
    margin-bottom: 4rem;
  }
`

const StyledImage = styled(Image)`
  @media (min-width: 1200px) {
    width: 25rem;
  }
`

const StyledDiv = styled.div`
  width: 100%;

  @media (min-width: 1200px) {
    margin-left: 2rem;
    width: 20%;
  }
`

const StyledSpan = styled.span`
  font-weight: 600;
  font-size: 1.4rem;
`

const StyledBtnBig = styled.button`
  width: 100%;
  height: 3rem;
  border: none;
  background-color: #004530;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  padding: 2px;
  margin: 1rem auto;

  &:hover {
    opacity: 0.8;
  }
`

export const pageQuery = graphql`
  query($slug: String!, $category: String!) {
    sanityProduct(
      slug: { current: { eq: $slug } }
      categories: { elemMatch: { slug: { current: { eq: $category } } } }
    ) {
      id
      title
      ingredients
      nutritonal_facts
      bestBefore
      price
      weight
      image {
        alt
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

const Product = ({ data }) => {
  const [numberOfitems, setNumberOfItems] = useState(1)
  const { addToCart } = useContext(GlobalContext)
  const product = data.sanityProduct
  const priceInRub = priceToRubles(product.price)

  const increase = () => {
    setNumberOfItems(numberOfitems + 1)
  }

  const decrease = () => {
    if (numberOfitems > 1) {
      setNumberOfItems(numberOfitems - 1)
    }
  }

  const handleClick = () => {
    addToCart({ ...product, quantity: numberOfitems })
  }

  return (
    <>
      <SEO title={`${product.title} | Mallakto`} />
      <StyledSection>
        <StyledImage fluid={product.image.asset.fluid} alt={product.title} />
        <StyledDiv>
          <h1>{product.title}</h1>
          <StyledSpan>{priceInRub}</StyledSpan>
          <p>
            <strong>Состав:</strong> {product.ingredients}
          </p>
          <p>
            <strong>Пищевая ценность:</strong> {product.nutritonal_facts}
          </p>
          <p>
            <strong>Вес:</strong> {product.weight}
          </p>
          <p>
            <strong>Срок Годности: </strong>
            {product.bestBefore}
          </p>
          <QuantityPicker
            isInline={false}
            increase={increase}
            decrease={decrease}
            numberOfItems={numberOfitems}
            isLabelDisplayed={true}
          />
          <StyledBtnBig onClick={handleClick}>
            {" "}
            Добавить в корзину <FontAwesomeIcon icon={faShoppingCart} />
          </StyledBtnBig>
        </StyledDiv>
      </StyledSection>
    </>
  )
}

export default Product
