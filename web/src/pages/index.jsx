import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import Layout from '../containers/Layout';
import Grid from '../components/Grid';
import Typography from '../components/Typography';
import { palette } from '../components/Theme/variables';

const StyledGatsbyImage = styled(GatsbyImage)`
  max-height: calc(100vh - 74px);
`;

const StyledTypography = styled(Typography)`
  padding: 24px;
  max-width: 300px;
  text-transform: uppercase;
  font-weight: 500;

  @media(max-width: 600px) {
    position: absolute;
    z-index: 10;
    top: 40%;
    text-align: center;
    font-size: 40px;
    line-height: 56px;
    color: ${palette.textSecondary};
    left: 0;
    right: 0;
    margin: auto;
  }

  @media(min-width: 1024px) {
    max-width: 500px;
    padding: 0 24px 80px;
  }
`;

const ContactBackground = styled(Grid)`
  background-color: ${palette.primary};
  position: relative;
  min-height: 108px;
  top: -10px;

  @media(min-width:600px) {
    padding: 0;
  }

  @media(min-width: 1024px){
    max-width: 75%;
    top: -113px;

    &::after {
      content: "";
      height: 108px;
      width: 64px;
      background-color: ${palette.primary};
      position: absolute;
      right: -16px;
      transform: skewx(16deg);
    }
  }
`;

const ContactTypography = styled(Typography)`
  text-transform: uppercase;
  color: ${palette.textSecondary};
  font-weight: 500;
  padding: 24px 0;

  @media(min-width: 600px) {
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 24px;

  .MuiSvgIcon-root {
    color: ${palette.textSecondary};
    margin-right: 8px;
  }
`;

const ContactDetail = ({ icon, children }) => (
  <Container>
    {icon}
    <ContactTypography>
      {children}
    </ContactTypography>
  </Container>
);

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
        <ContactBackground
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item lg={4}>
            <ContactDetail
              icon={<PhoneIcon />}
            >
              06 1164 8410
            </ContactDetail>
          </Grid>
          <Grid item lg={4}>
            <ContactDetail
              icon={<MailIcon />}
            >
              emiel@EMIELSPAANMONTAGE.nl
            </ContactDetail>
          </Grid>
          <Grid item lg={4}>
            <ContactDetail
              icon={<HomeIcon />}
            >
              Oosterwerf 44, 1505KC, Zaandam
            </ContactDetail>
          </Grid>
        </ContactBackground>
      </Grid>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default IndexPage;
