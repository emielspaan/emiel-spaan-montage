import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../containers/Layout';
import Grid from '../components/Grid';
import Typograghy from '../components/Typography';

const StyledGatsbyImage = styled(GatsbyImage)`
  max-height: calc(100vh - 74px);
`;

const StyledTypography = styled(Typograghy)`
  padding: 24px;
  max-width: 300px;
  margin: 0 auto;

  @media(min-width: 1024px) {
    max-width: 500px;
  }
`;

export const homePageQuery = graphql`
  query homePageQuery {
    sanityPage {
      heroTitle
      heroImage {
        asset {
          gatsbyImageData(placeholder: BLURRED, formats: JPG)
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const {
    data: {
      sanityPage: {
        heroTitle,
        heroImage: {
          asset: {
            gatsbyImageData,
          },
        },
      },
    },
  } = props;

  return (
    <Layout>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={6} xs={12} md={6} sm={6}>
          <StyledTypography variant="h3">{heroTitle}</StyledTypography>
        </Grid>
        <Grid item lg={6} xs={12} md={6} sm={6}>
          <StyledGatsbyImage
            layout="fullWidth"
            image={gatsbyImageData}
            alt={heroTitle}
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default IndexPage;
