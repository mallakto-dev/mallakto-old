exports.createPages = async ({ actions: {createPage}, graphql }) => {
    const results = await graphql(`
        {
            allProductsJson {
                edges {
                    node {
                            category
                            slug
                    }
                }
            }
        }
    `)

    if(results.error) {
        console.log("something went wrong" + error);
        return;
    }

    results.data.allProductsJson.edges.forEach(edge => {
        const product = edge.node;

        createPage({
            path: `/products/${product.category}/${product.slug}`,
            component: require.resolve('./src/templates/product-graphql.js'),
            context: {
                category: product.category,
                slug: product.slug
            }
        });

    })
}