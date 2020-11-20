import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { ProductCard } from "./ProductCard"

const StyledSection = styled.section`
  margin: 6rem 2rem;
`

const Grid = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: 18rem;
  grid-row-gap: 2rem;
  list-style: none;
  padding: 0;

  @media (min-width: 768px) {
    grid-template-columns: 18rem 18rem;
    grid-gap: 2rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 16.5rem 16.5rem 16.5rem;
    grid-gap: 2rem;
  }
`

const StyledH2 = styled.h2`
  text-align: center;
  color: #004530;
  font-size: 2rem;
`

export const ProductsGrid = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityProduct {
        edges {
          node {
            id
            title
            price
            weight
            categories {
              title
              index
              slug {
                current
              }
            }
            slug {
              current
            }
            image {
              alt
              asset {
                fluid(maxWidth: 288, maxHeight: 223) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  // sorting prodcution by first category's name
  const sortedByCategory = data.allSanityProduct.edges.sort((a, b) => {
    let aIdx = a.node.categories[0].index
    let bIdx = b.node.categories[0].index
    return aIdx - bIdx
  })

  const sortedProducts = sortedByCategory.map(({ node: product }) => {
    const { id, title, price, weight, slug, image, categories } = product
    const productUrl = `/products/${categories[0].slug.current}/${slug.current}`

    return (
      <ProductCard
        key={id}
        id={id}
        title={title}
        price={price}
        weight={weight}
        image={image.asset.fluid}
        altText={image.alt}
        linkTo={productUrl}
      />
    )
  })

  return (
    <StyledSection>
      <StyledH2>Продукция</StyledH2>
      <Grid>{sortedProducts}</Grid>
    </StyledSection>
  )
}
