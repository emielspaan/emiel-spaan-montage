import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import Layout from '../containers/Layout';
import Grid from '../components/Grid';
import Typography from '../components/Typography';
import { palette } from '../components/Theme/variables';

const StyledGatsbyImage = styled(GatsbyImage)`
  max-height: calc(100vh - 108px);
`;

const StyledTypography = styled(Typography)`
  padding: 24px;
  max-width: 300px;
  text-transform: uppercase;
  font-weight: 500;

  @media(max-width: 600px) {
    position: absolute;
    padding: 0;
    z-index: 10;
    top: 30%;
    text-align: center;
    font-size: 48px;
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

const Services = styled(Grid)`
`;

const ContactBackground = styled(Grid)`
  background-color: ${palette.primary};
  position: absolute;
  min-height: 108px;
  padding: 24px 0;
  z-index: 5;
  bottom: 0;

  @media(min-width:600px) {
    padding: 0;
  }

  @media(min-width: 1024px){
    max-width: 75%;

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
  padding: 24px;
  font-size: 20px;

  @media(min-width: 600px) {
    padding: 0;
    font-size: 14px;
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
    <ContactTypography variant="subtitle2">
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
        <Grid
          container
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
            <Grid item lg={3}>
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
            <Grid item lg={5}>
              <ContactDetail
                icon={<HomeIcon />}
              >
                Oosterwerf 44, 1505KC, Zaandam
              </ContactDetail>
            </Grid>
          </ContactBackground>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <StyledGatsbyImage
            layout="fullWidth"
            image={gatsbyImageData}
            alt={heroTitle}
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <p>Test</p>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <p>Test</p>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
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
