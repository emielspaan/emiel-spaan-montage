import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Grid from '../components/Grid';
import Layout from '../containers/Layout';
import Card from '../components/Card';

const Container = styled.div`
  padding: 24px;
`;

export const projecPageQuery = graphql`
  query projectPageQuery {
    allSanityProjects {
      edges {
        node {
          image1 {
            asset {
              gatsbyImageData(width: 500, height: 350, placeholder: BLURRED, formats: JPG)
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
      <Container>
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

            return (
              <Grid item lg={3} xs={12} md={4} sm={6}>
                <Card
                  cardHeading={title}
                  headingTag="h5"
                  cardBody={description}
                  image={cardImage}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
};

MijnProjecten.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default MijnProjecten;
