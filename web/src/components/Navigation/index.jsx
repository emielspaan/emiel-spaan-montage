import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { GatsbyImage } from 'gatsby-plugin-image';
import { IconButton } from '../Button';
import Typography from '../Typography';
import Drawer from '../Drawer';

const StyledToolbar = styled(Toolbar)`
  && {
    display: none;

    @media (min-width: 1024px) {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }
`;

const NavigationTypography = styled(Typography)`
  && {
    padding: 24px;
    text-align: center;

    @media (min-width: 840px) {
      padding: 0 16px;
    }
  }
`;

const LogoContainer = styled.div`
  max-width: 120px;
  margin: 24px auto;
  position: relative;
  left: -24px;

  @media (min-width:1024px) {
    margin: 24px 48px;
  }
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  height: auto;
  width: 100%;
`;

const StyledIconButton = styled(IconButton)`
  && {
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

const StyledAppBar = styled(AppBar)`
  && {
    display: flex;
    flex-direction: row;
  }
`;

const Navigation = ({ links }) => {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data = useStaticQuery(
    graphql`
    query LogoQuery {
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

  console.log(data);
  return (
    <StyledAppBar position="static">
      <StyledIconButton
        onClick={handleDrawer}
        color="inherit"
      >
        <MenuIcon />
      </StyledIconButton>
      <LogoContainer>
        <StyledGatsbyImage
          image={gatsbyImageData}
          alt="Emiel Spaan Montage"
        />
      </LogoContainer>
      <StyledToolbar>
        <Drawer open={open} onClose={handleClose}>
          {links}
        </Drawer>
        {links}
      </StyledToolbar>
    </StyledAppBar>
  );
};

Navigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.node),
};

Navigation.defaultProps = {
  links: null,
};

export { NavigationTypography, Navigation };
