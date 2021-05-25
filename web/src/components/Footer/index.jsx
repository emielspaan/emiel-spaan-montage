import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import Grid from '../Grid';
import Typography from '../Typography';

const StyledGrid = styled(Grid)`
  padding: 32px 16px;
  background-color: black;

  @media (min-width: 600px) {
    padding: 32px 48px;   
  }
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
      },
`,
  );

  const {
    sanityLogo:
    {
      logo:
      {
        asset:
        { gatsbyImageData },
      },
    },
  } = data;
  return (
    <StyledGrid component="footer" container>
      <Grid item lg={4}>
        {' '}
        <GatsbyImage
          image={gatsbyImageData}
          alt="Emiel Spaan Montage"
        />

      </Grid>
      <Grid item lg={4}>
        <Typography color="textSecondary" variant="h5">Contact</Typography>
        <Typography color="textSecondary" variant="body2">
          Geinteresseerd? Neem dan contact met
          mij op voor een vrijblijvend gesprek.
        </Typography>
        <Typography color="textSecondary" variant="subtitle2">Tel:</Typography>
        <Typography color="textSecondary" variant="subtitle2">Email:</Typography>
        <Typography color="textSecondary" variant="subtitle2">Adres:</Typography>
      </Grid>
      <Grid item lg={4}>
        <Typography color="textSecondary" variant="subtitle1">Wat ik doe</Typography>
        <Typography color="textSecondary" variant="subtitle1">Mijn projecten</Typography>
        <Typography color="textSecondary" variant="subtitle1">Wat klanten zeggen</Typography>
        <Typography color="textSecondary" variant="subtitle1">Contact</Typography>
      </Grid>
    </StyledGrid>
  );
};

export default Footer;
