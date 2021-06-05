exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
  {
    allSanityProjects {
      edges {
        node {
            title
            slug {
                current
            }
        }
      }
    }
}
  `);

  console.log(result.data.allSanityProjects.edges);

  const dogData = [
    {
      name: 'Fido',
      breed: 'Sheltie',
    },
    {
      name: 'Sparky',
      breed: 'Corgi',
    },
  ];
  result.data.allSanityProjects.edges.forEach((edge) => {
    const {
      node: {
        title,
        slug: {
          current,
        },
      },
    } = edge;
    createPage({
      path: `/${current}`,
      component: require.resolve('./src/templates/BlogPost.jsx'),
      context: { title },
    });
  });
};
