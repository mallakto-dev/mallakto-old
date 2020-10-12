exports.createPages = async ({ actions: {createPage}, graphql }) => {
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
        }
    `)

    if(result.error) {
        console.log("something went wrong" + error);
        return;
    }
    
    const products = result.data.allSanityProduct.edges.map(({node}) => node);

    products.forEach(product => {

        createPage({
            path: `/products/${product.categories[0].slug.current}/${product.slug.current}`,
            component: require.resolve('./src/templates/product-graphql.js'),
            context: {
                category: product.categories[0].slug.current,
                slug: product.slug.current
            }
        });
    });
}