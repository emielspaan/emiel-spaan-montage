import React from 'react';
import { Navigation, NavigationTypography } from '../Navigation';
import Anchor from '../Anchor';

const links = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'Services',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
];

export default {
  title: 'Navigation/Header',
  component: Navigation,
};

export const Navbar = () => (
  <Navigation
    links={links.map((link) => {
      const { name, href } = link;
      return (
        <Anchor key={name} href={href}>
          <NavigationTypography variant="subtitle2" color="textSecondary">
            {name}
          </NavigationTypography>
        </Anchor>
      );
    })}
  />
);
