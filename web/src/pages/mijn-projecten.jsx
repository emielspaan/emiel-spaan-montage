import React from 'react';
import { graphql } from 'gatsby';
import Grid from '../components/Grid';
import Layout from '../containers/Layout';
import Card from '../components/Card';

export const projecPageQuery = graphql`
  query projectPageQuery {
    allSanityProjects {
      edges {
        node {
          image1 {
            asset {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: JPG)
            }
          }
          title
          description
        }
      }
    }
  }
`;

const MijnProjecten = ({ data }) => {
  const { allSanityProjects: { edges } } = data;
  return (
    <Layout>
      <h1>Mijn projecten</h1>
      <Grid container spacing={3}>
        {edges.map((card) => {
          const {
            node: {
              title,
              description,
              image1: {
                asset: {
                  gatsbyImageData: cardImage,
                },
              },
            },
          } = card;
          console.log(card.node.title);
          return (
            <Grid item lg={3} xs={12} md={4} sm={6}>
              <Card
                cardHeading={title}
                cardBody={description}
                image={cardImage}
              />
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
};

export default MijnProjecten;
