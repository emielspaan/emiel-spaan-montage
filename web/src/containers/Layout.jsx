import React from 'react';
import styled from '@emotion/styled';
import CssBaseline from '@material-ui/core/CssBaseline';
import SimpleReactLightbox from 'simple-react-lightbox';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Navigation } from '../components/Navigation';
import Anchor from '../components/Anchor';
import Theme from '../components/Theme/Theme';
import Typography from '../components/Typography';
import { palette } from '../components/Theme/variables';
import Footer from '../components/Footer';

const StyledTypography = styled(Typography)`
  text-transform: uppercase;
  text-decoration: none;
  padding: 24px;
  color: ${palette.textPrimary};

  @media (min-width: 1024px) {
    padding: 0 24px;
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

const WhatsApp = styled.div`
  position: fixed;
  width: 70px;
  height: 70px;
  bottom: 40px;
  right: 40px;
  background-color: #25D366;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0px 37px 20px -15px #00000033;

  svg {
    color: ${palette.textSecondary};
    width: 40px;
    height: 40px;
  }
`;

const Container = styled.main`
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
  <SimpleReactLightbox>
    <Theme>
      <CssBaseline />
      <Navbar />
      <Container>
        {children}
      </Container>
      <Footer />
      <a href="https://wa.me/31611648410" target="_blank" rel="noopener noreferrer nofollow">
        <WhatsApp>
          <WhatsAppIcon color="textPrimary" />
        </WhatsApp>
      </a>
    </Theme>
  </SimpleReactLightbox>
);

export default LayoutContainer;
