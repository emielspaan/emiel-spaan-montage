import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Grid from '../components/Grid';
import Layout from '../containers/Layout';
import Card from '../components/Card';

const Container = styled.div`
  padding: 24px;
`;

export const projectsPageQuery = graphql`
  query {
    allSanityProjects {
      edges {
        node {
          plaatje1 {
            asset {
              gatsbyImageData(width: 800, height: 800, placeholder: BLURRED, formats: JPG)
            }
          }
          plaatje2 {
            asset {
              gatsbyImageData(width: 800, height: 800, placeholder: BLURRED, formats: JPG)
            }
          }
          plaatje3 {
            asset {
              gatsbyImageData(width: 800, height: 800, placeholder: BLURRED, formats: JPG)
            }
          }
          plaatje4 {
            asset {
              gatsbyImageData(width: 800, height: 800, placeholder: BLURRED, formats: JPG)
            }
          }
          title
        }
      }
    }
  }
`;

const MijnProjecten = ({ data }) => {
  const {
    allSanityProjects: {
      edges,
    },
  } = data;
  return (
    <Layout>
      <Container>
        <h1>Mijn projecten</h1>

        <Grid container spacing={3}>
          {edges.map((edge) => {
            const {
              node: {
                plaatje1: {
                  asset: {
                    gatsbyImageData: cardImage,
                  },
                },
                title,
              },
            } = edge;
            return (
              <Grid item lg={3} xs={12} md={4} sm={6}>
                <SimpleReactLightbox>
                  <SRLWrapper>
                    <Card
                      image={cardImage}
                      headingTag="body1"
                      cardHeading={title}
                    />
                  </SRLWrapper>
                </SimpleReactLightbox>
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
