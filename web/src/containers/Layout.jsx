import React from 'react';
import styled from '@emotion/styled';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Navigation } from '../components/Navigation';
import Anchor from '../components/Anchor';
import Theme from '../components/Theme/Theme';
import Typography from '../components/Typography';

const StyledTypography = styled(Typography)`
  text-transform: uppercase;
`;

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
];

const Navbar = () => (
  <Navigation
    links={links.map((link) => {
      const { name, href } = link;
      return (
        <Anchor key={name} href={href}>
          <StyledTypography variant="subtitle2">
            {name}
          </StyledTypography>
        </Anchor>
      );
    })}
  />
);

const LayoutContainer = (children) => (
  <Theme>
    <CssBaseline />
    <Navbar />
    {children}
    <footer>Footer</footer>
  </Theme>
);

export default LayoutContainer;
