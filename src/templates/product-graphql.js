import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

export const query = graphql`

query ($category: String!, $slug: String!) {
    productsJson(category: {eq: $category}, slug: {eq: $slug}) {
        title
        ingredients
        price
        weight
        slug
        bestBefore
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
    }
  }
`;

const Product = ( {data} ) => {
    const product = data.productsJson;
    return (
        <div style={{display: 'grid'}}>
            <div>
                <h1>{product.title}</h1>
                <p>{product.ingredients}</p>
                <span>{product.price}</span>
                <span>{product.weight}</span>
                <span>{product.bestBefore}</span>
                <Image fluid={product.image.childImageSharp.fluid} alt={product.title} style={{float: 'left', marginRight: '1rem', width: 150}} />
            </div>
        </div>
    )

}

export default Product;