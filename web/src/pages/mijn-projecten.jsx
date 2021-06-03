import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';
import { graphql } from 'gatsby';
import Grid from '../components/Grid';
import Layout from '../containers/Layout';
import Card from '../components/Card';

const Container = styled.div`
  padding: 24px;
`;

export const projecPageQuery = graphql`
  query {
    allSanityProjects {
      nodes {
        _rawDescription(resolveReferences: {maxDepth: 10})
      }
    }
  }
`;

const MijnProjecten = ({ data }) => {
  const { allSanityProjects: { nodes } } = data;
  console.log(nodes);
  return (
    <Layout>
      <Container>
        <h1>Mijn projecten</h1>
        {/* <Grid container spacing={3}>
          {nodes.map((card) => {
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
                <BlockContent blocks={post._rawProjectDesc} serializers={serializers} />
                <Card
                  cardHeading={title}
                  headingTag="h5"
                  cardBody={description}
                  image={cardImage}
                />
              </Grid>
            );
          })}
        </Grid> */}
      </Container>
    </Layout>
  );
};

MijnProjecten.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default MijnProjecten;
