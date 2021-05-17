import React from 'react';
import { Navigation } from '../components/Navigation';
import Anchor from '../components/Anchor';
import Theme from '../components/Theme/Theme';
import styled from "@emotion/styled";
import CssBaseline from '@material-ui/core/CssBaseline';

const NavLinkText = styled.h6`
  font-family: "Oswald";
  color: white;
  font-size: 12px;
  padding: 0 24px;
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
          <NavLinkText>
            {name}
          </NavLinkText>
        </Anchor>
      );
    })}
  />
);

const LayoutContainer = ({children}) => (
    <Theme>
    <CssBaseline />
    <Navbar />
      {children}
    <footer>Footer</footer>
    </Theme>
  )

export default LayoutContainer
