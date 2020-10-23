import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { ProductCard } from "../components/ProductCard"
import { SEO } from "../components/SEO"

export const pageQuery = graphql`
  query($slug: String!) {
    allSanityProduct(
      filter: {
        categories: { elemMatch: { slug: { current: { eq: $slug } } } }
      }
    ) {
      edges {
        node {
          id
          title
          price
          weight
          categories {
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
`

const StyledSection = styled.section`
  margin: 2rem;
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

const CategoryGrid = ({ data, pageContext }) => {
  const categoryTitle = pageContext.title

  const products = data.allSanityProduct.edges.map(({ node: product }) => {
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
    <>
      <SEO />
      <StyledSection>
        <StyledH2>{categoryTitle}</StyledH2>
        <Grid>{products}</Grid>
      </StyledSection>
    </>
  )
}

export default CategoryGrid
