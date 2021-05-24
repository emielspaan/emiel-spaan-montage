import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import MailIcon from '@material-ui/icons/Mail';
import Box from '@material-ui/core/Box';
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
    max-width: 70%;
    padding: 0 24px 80px;
  }
`;

const ContactBackground = styled(Grid)`
  background-color: ${palette.primary};
  position: static;
  padding: 16px 0;
  min-height: 108px;

  @media(min-width:600px) {
    padding: 0;
  }

  @media(min-width: 1024px){
    z-index: 5;
    bottom: 0;
    max-width: 75%;
    position: absolute;

    &::after {
      content: "";
      height: 108px;
      width: 64px;
      position: absolute;
      background-color: ${palette.primary};
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

const StyledGrid = styled(Grid)`
    flex-direction: column-reverse;

    @media(min-width:720px) {
      flex-direction: ${(props) => props.direction};
    }
`;

export const homePageQuery = graphql`
  query homePageQuery {
    sanityPage {
      heroTitle
      heroImage {
        asset {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: JPG)
        }
      }
      montageTitle
      montageDescription
      montageImage {
        asset {
          gatsbyImageData(placeholder: BLURRED, formats: JPG)
        }
      }
      verfSpuitenTitle
      verfSpuitenDescription
      verfSpuitenImage {
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
            gatsbyImageData: heroImage,
          },
        },
        verfSpuitenTitle,
        verfSpuitenDescription,
        verfSpuitenImage: {
          asset: {
            gatsbyImageData: verfSpuitenImage,
          },
        },
        montageTitle,
        montageDescription,
        montageImage: {
          asset: {
            gatsbyImageData: montageImage,
          },
        },
      },
    },
  } = props;

  return (
    <Layout>
      <Grid
        container
      >
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
              image={heroImage}
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
        <StyledGrid
          direction="row"
          container
          alignItems="center"
        >
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <GatsbyImage
              image={montageImage}
              alt={montageTitle}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{ maxWidth: '80%', margin: '0 auto', padding: '24px 0' }}>
              <Typography
                paragraph
                variant="h4"
                align="center"
              >
                {montageTitle}
              </Typography>
              <Typography paragraph variant="body1">{montageDescription}</Typography>
            </Box>
          </Grid>
        </StyledGrid>
        <StyledGrid
          direction="row-reverse"
          container
          alignItems="center"
        >
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <GatsbyImage
              image={verfSpuitenImage}
              alt={verfSpuitenTitle}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{ maxWidth: '80%', margin: '0 auto', padding: '24px 0' }}>
              <Typography
                paragraph
                variant="h4"
                align="center"
              >
                {verfSpuitenTitle}
              </Typography>
              <Typography paragraph variant="body1">{verfSpuitenDescription}</Typography>
            </Box>
          </Grid>
        </StyledGrid>
      </Grid>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default IndexPage;
