import React from 'react';
import styled from '@emotion/styled';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Navigation } from '../components/Navigation';
import Anchor from '../components/Anchor';
import Theme from '../components/Theme/Theme';
import Typography from '../components/Typography';
import { palette } from '../components/Theme/variables';

const StyledTypography = styled(Typography)`
  text-transform: uppercase;
  text-decoration: none;
  padding: 0 24px;
  font-size: 16px;
  color: ${palette.textPrimary};

  ${(props) => props.contact
  && ` font-size: 20px;
       background-color: ${palette.primary};
       color: ${palette.textSecondary};
       height: 108px;
       line-height: 108px;
       width: 165px;
       text-align: center;
       margin-left: 48px;
       position: relative;

       &::before {
        content: "";
        height: 108px;
        width: 34px;
        background-color: ${palette.primary};
        position: absolute;
        left: -16px;
        transform: skewx(-16deg);
      }
    `
}
`;

const links = [
  {
    name: 'Wat ik doe',
    href: '/',
  },
  {
    name: 'Mijn Projecten',
    href: '/mijn-projecten',
  },
  {
    name: 'Wat klanten zeggen',
    href: '/wat-klanten-zeggen',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

const Navbar = () => (
  <Navigation
    links={links.map((link) => {
      const { name, href } = link;
      return (
        <>
          {
          name === 'Contact'
            ? (
              <Anchor key={name} href={href}>
                <StyledTypography contact variant="subtitle2">
                  {name}
                </StyledTypography>
              </Anchor>
            )
            : (
              <Anchor key={name} href={href}>
                <StyledTypography variant="subtitle2">
                  {name}
                </StyledTypography>
              </Anchor>
            )
        }
        </>
      );
    })}
  />
);

const LayoutContainer = ({ children }) => (
  <Theme>
    <CssBaseline />
    <Navbar />
    {children}
    <footer>Footer</footer>
  </Theme>
);

export default LayoutContainer;
