import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { Counter } from "../components/Counter"
import { priceToRubles } from '../utils/priceToRubles'

const StyledDivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;

  & > * {
    /* weird hack for gatsby-image, without flex-grow image disappears on a big screens */
    flex-grow: 1;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 4rem;
  }
`

const StyledDiv = styled.div`
    width: 100%;

    @media (min-width: 768px) {
        margin-left: 2rem;
        padding: 1rem;
        width: 20%;
  }
`

const StyledSpan = styled.span`
    font-weight: 600;
    font-size: 1.4rem;
`;

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
  const product = data.sanityProduct

  const priceInRub = priceToRubles(product.price);

  return (
    <Layout>
        <SEO />
      <StyledDivWrapper>
        <Image fluid={product.image.asset.fluid} alt={product.title} />
        <StyledDiv>
          <h1>{product.title}</h1>
          <StyledSpan>{priceInRub}</StyledSpan>
          <p><strong>Состав:</strong> {product.ingredients}</p>
          <p><strong>Пищевая ценность:</strong> {product.nutritonal_facts}</p>
          <p><strong>Вес:</strong> {product.weight}</p>
          <p><strong>Срок Годности: </strong>{product.bestBefore}</p>
          <Counter />
          <StyledBtnBig>
        {" "}
        Добавить в корзину <FontAwesomeIcon icon={faShoppingCart} />
      </StyledBtnBig>
        </StyledDiv>
      </StyledDivWrapper>
    </Layout>
  )
}

export default Product
