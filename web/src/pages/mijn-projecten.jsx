import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Grid from '../components/Grid';
import Layout from '../containers/Layout';
import Card from '../components/Card';
import Anchor from '../components/Anchor';

const Container = styled.div`
  padding: 24px;
`;

export const projectsPageQuery = graphql`
  query {
    allSanityProjects {
      edges {
        node {
          title
          slug {
            current
          }
          images {
            asset {
              gatsbyImageData(width: 1000, height: 1000, placeholder: BLURRED, formats: JPG)
            }
          }
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
      <Helmet>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <meta charSet="utf-8" />
        <title>Mijn afgeronde montage, timmer, verf of schilder projecten</title>
        <meta name="description" content="Een overzicht van een aantal afgeronde montage, timmer, verf of schilder projecten" />
      </Helmet>
      <Container>
        <h1>MIJN PROJECTEN</h1>
        <p>Een overzicht van een aantal afgeronde projecten.</p>
        <Grid container spacing={3}>
          {edges.map((edge) => {
            const {
              node: {
                images,
                title,
                slug: {
                  current: slug,
                },
              },
            } = edge;

            const {
              asset: {
                gatsbyImageData,
              },
            } = images[0];
            return (
              <Grid item lg={3} xs={12} md={4} sm={6}>
                <Anchor href={`/${slug}`}>
                  <Card
                    image={gatsbyImageData}
                    headingTag="body1"
                    cardHeading={title}
                  />
                </Anchor>
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
