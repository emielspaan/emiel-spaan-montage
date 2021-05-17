import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../containers/Layout';
import Grid from '../components/Grid';

export const homePageQuery = graphql`
  query homePageQuery {
    sanityPage {
      heroTitle
      heroImage {
        asset {
          gatsbyImageData(width: 800, placeholder: BLURRED, formats: JPG)
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const {
    heroTitle,
    heroImage,
  } = props.data.sanityPage;

  return (
    <Layout>
      <Grid container>
        <Grid item lg={6} xs={12} md={6} sm={6}>
          <h1>{heroTitle}</h1>
        </Grid>
        <Grid item lg={6} xs={12} md={6} sm={6}>
          <GatsbyImage image={heroImage.asset.gatsbyImageData} alt={heroTitle} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default IndexPage;
