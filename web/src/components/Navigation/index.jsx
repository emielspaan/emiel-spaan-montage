import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
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

  return (
    <StyledAppBar position="static">
      <StyledIconButton
        onClick={handleDrawer}
        color="inherit"
      >
        <MenuIcon />
      </StyledIconButton>
      <p>Emiel Spaan Montage</p>
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
