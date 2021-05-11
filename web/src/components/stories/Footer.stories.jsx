import React from 'react';
import FooterComponent from '../Footer';
import Grid from '../Grid';
import Typography from '../Typography';

export default {
  title: 'Footer/Footer',
};

const footerItems = {
  explore: {
    home: 'Home',
    about: 'Over ons',
    services: 'Services',
    contact: 'Contact',
  },
  visit: {
    name: 'Company name',
    street: 'Kersenhout 31',
    zipCode: '1507 EP',
    place: 'Zaandam',
  },
  follow: {
    facebook: 'Facebook',
    instagram: 'Instagram',
    twitter: 'Twitter',
    linkedin: 'Linkedin',
  },
  legal: {
    terms: 'Terms & conditions',
    disclaimer: 'Disclaimer',
  },
};

export const Footer = () => {
  const {
    explore, visit, follow, legal,
  } = footerItems;
  return (
    <FooterComponent justifyContent="space-between">
      <Grid item xs={6} sm={6} md={4} lg={3}>
        <Typography
          color="textSecondary"
          display="block"
          variant="h6"
          component="span"
          gutterBottom
        >
          Explore
        </Typography>
        <Typography color="textSecondary" display="block" variant="subtitle2" component="span">
          {explore.home}
        </Typography>
        <Typography color="textSecondary" display="block" variant="subtitle2" component="span">
          {explore.about}
        </Typography>
        <Typography color="textSecondary" display="block" variant="subtitle2" component="span">
          {explore.services}
        </Typography>
        <Typography color="textSecondary" display="block" variant="subtitle2" component="span">
          {explore.contact}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={3}>
        <Typography
          color="textSecondary"
          display="block"
          variant="h6"
          component="span"
          gutterBottom
        >
          Visit
        </Typography>
        <Typography color="textSecondary" display="block" variant="subtitle2" component="span">
          {visit.name}
        </Typography>
        <Typography color="textSecondary" display="block" variant="subtitle2" component="span">
          {visit.street}
        </Typography>
        <Typography color="textSecondary" display="block" variant="subtitle2" component="span">
          {visit.zipCode}
        </Typography>
        <Typography color="textSecondary" display="block" variant="subtitle2" component="span">
          {visit.place}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={3}>
        <Typography
          color="textSecondary"
          display="block"
          variant="h6"
          component="span"
          gutterBottom
        >
          Follow
        </Typography>
        <Typography color="textSecondary" display="block" variant="subtitle2" component="span">
          {follow.facebook}
        </Typography>
        <Typography color="textSecondary" display="block" variant="subtitle2" component="span">
          {follow.instagram}
        </Typography>
        <Typography color="textSecondary" display="block" variant="subtitle2" component="span">
          {follow.twitter}
        </Typography>
        <Typography color="textSecondary" display="block" variant="subtitle2" component="span">
          {follow.linkedin}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={3}>
        <Typography
          color="textSecondary"
          display="block"
          variant="h6"
          component="span"
          gutterBottom
        >
          Legal
        </Typography>
        <Typography color="textSecondary" display="block" variant="subtitle2" component="span">
          {legal.terms}
        </Typography>
        <Typography color="textSecondary" display="block" variant="subtitle2" component="span">
          {legal.disclaimer}
        </Typography>
      </Grid>
    </FooterComponent>
  );
};
