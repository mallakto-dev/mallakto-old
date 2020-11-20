exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql(`
    {
      allSanityProduct {
        edges {
          node {
            categories {
              slug {
                current
              }
            }
            slug {
              current
            }
          }
        }
      }
      allSanityCategory {
        edges {
          node {
            slug {
              current
            }
            description
          }
        }
      }
    }
  `)

  if (result.error) {
    console.log("something went wrong" + error)
    return
  }

  const categories = result.data.allSanityCategory.edges.map(({ node }) => node)

  categories.forEach(category => {
    createPage({
      path: `/products/${category.slug.current}`,
      component: require.resolve("./src/templates/categories-graphql.js"),
      context: {
        slug: category.slug.current,
        title: category.description,
      },
    })
  })

  const products = result.data.allSanityProduct.edges.map(({ node }) => node)

  products.forEach(product => {
    createPage({
      // explicitly using 0 index, since there is only one category per product
      path: `/products/${product.categories[0].slug.current}/${product.slug.current}`,
      component: require.resolve("./src/templates/product-graphql.js"),
      context: {
        category: product.categories[0].slug.current,
        slug: product.slug.current,
      },
    })
  })
}
