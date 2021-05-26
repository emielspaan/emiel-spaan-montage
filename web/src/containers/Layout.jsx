import React from 'react';
import styled from '@emotion/styled';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Navigation } from '../components/Navigation';
import Anchor from '../components/Anchor';
import Theme from '../components/Theme/Theme';
import Typography from '../components/Typography';
import { palette } from '../components/Theme/variables';
import Footer from '../components/Footer';

const StyledTypography = styled(Typography)`
  text-transform: uppercase;
  text-decoration: none;
  padding: 0 24px;
  color: ${palette.textPrimary};

  @media (max-width: 1024px) {
    padding: 24px;
  }

  ${(props) => props.contact
  && `@media (min-width: 1024px) {
       font-size: 20px;
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
    }
    `
}
`;

const Container = styled.main`
  max-width: 1920px;
  margin: 0 auto;
  min-height: 100vh;
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
    <Container>
      {children}
    </Container>
    <Footer />
  </Theme>
);

export default LayoutContainer;
