import React from 'react';
import { graphql } from 'gatsby';
import Grid from '../components/Grid';
import Layout from '../containers/Layout';
import Card from '../components/Card';

export const projecPageQuery = graphql`
  query MyQuery {
    sanityProjects {
      title
  }
}
`;

const Cards = (props) => {
  // const { edges } = data;
  console.log(props.data);
  return (
    <Grid container spacing={3}>
      {/* {edges.map((node) => {
        const {
          title,
          description,
          image1: {
            asset: {
              gatsbyImageData: cardImage,
            },
          },
        } = node;
        return (
          <Grid item lg={3} xs={12} md={4} sm={6}>
            <Card
              cardHeading={title}
              cardBody={description}
              image={cardImage}
            />
          </Grid>
        );
      })} */}
    </Grid>
  );
};

const MijnProjecten = () => (
  <Layout>
    <h1>Mijn projecten</h1>
    <Cards />
  </Layout>
);

export default MijnProjecten;
