exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
  {
    allSanityProjects {
      edges {
        node {
          title
          images {
            asset {
              gatsbyImageData(width: 1000, height: 1000, placeholder: BLURRED, formats: JPG)
            }
          }
          slug {
            current
          }
        }
      }
    }
  }
`);

  result.data.allSanityProjects.edges.forEach((edge) => {
    const {
      node: {
        title,
        images,
        slug: {
          current,
        },
      },
    } = edge;

    createPage({
      path: `/${current}`,
      component: require.resolve('./src/templates/BlogPost.jsx'),
      context: { title, images },
    });
  });
};
