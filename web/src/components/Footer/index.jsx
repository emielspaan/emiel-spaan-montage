import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import Grid from '../Grid';
import Typography from '../Typography';
import Anchor from '../Anchor';
import { palette } from '../Theme/variables';

const StyledGrid = styled(Grid)`
  padding: 24px 0;
  background-color: ${palette.backgroundPrimary};
  margin-top: 32px;

  @media (min-width: 1024px) {
    padding: 64px 0px;
    border-top: none;
    margin-top: 0;
  }
`;

const StyledGridItem = styled(Grid)`
  padding: 16px 24px;  
  max-width: 375px;

  @media (min-width: 1024px) {
    padding: 0 48px 0 24px;
    
    ${(props) => props.divider
    && `border-left: 1px solid ${palette.black}`
};
  }
`;

const StyledGatsbyImageContainer = styled.div`
  max-width: 120px;
  padding-top: 8px;
`;

const Footer = () => {
  const data = useStaticQuery(
    graphql`
    query FooterQuery {
      sanityLogo {
          logo {
            asset {
              gatsbyImageData(placeholder: BLURRED, formats: PNG),
            },
          },
        },
      sanityCompany {
        address
        email
        telephone
      }
    },
`,
  );

  const {
    sanityLogo: {
      logo: {
        asset: {
          gatsbyImageData,
        },
      },
    },
    sanityCompany: {
      address,
      email,
      telephone,
    },
  } = data;
  return (
    <StyledGrid
      component="footer"
      container
    >
      <StyledGridItem item lg={3} md={3} sm={12} xs={12}>
        <StyledGatsbyImageContainer>
          <GatsbyImage
            image={gatsbyImageData}
            alt="Emiel Spaan Montage"
          />
        </StyledGatsbyImageContainer>
      </StyledGridItem>
      <StyledGridItem item lg={4} md={3} sm={12} xs={12}>
        <Typography color="textPrimary" paragraph variant="h5">Contact</Typography>
        <Typography color="textPrimary" paragraph variant="body2">
          Geinteresseerd? Neem dan contact met
          mij op voor een vrijblijvend gesprek.
        </Typography>
        <Typography color="textPrimary" variant="subtitle2">{`Tel: ${telephone}`}</Typography>
        <Typography color="textPrimary" variant="subtitle2">{`Email: ${email}`}</Typography>
        <Typography color="textPrimary" variant="subtitle2">{`Adres: ${address}`}</Typography>
      </StyledGridItem>
      <StyledGridItem item lg={4} md={3} sm={12} xs={12} divider>
        <Anchor href="/"><Typography color="textPrimary" variant="subtitle1">Wat ik doe</Typography></Anchor>
        <Anchor href="/mijn-projecten"><Typography color="textPrimary" variant="subtitle1">Mijn projecten</Typography></Anchor>
        <Anchor href="/contact"><Typography color="textPrimary" variant="subtitle1">Contact</Typography></Anchor>
      </StyledGridItem>
    </StyledGrid>
  );
};

export default Footer;
