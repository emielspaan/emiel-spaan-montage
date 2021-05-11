import React from 'react';
import MuiButton from '@material-ui/core/Button';
import MuiIconButton from '@material-ui/core/IconButton';

const Button = ({ ...props }) => (
  <MuiButton
    {...props}
  />
);

const IconButton = ({ ...props }) => (
  <MuiIconButton
    {...props}
  />
);

export { Button, IconButton };
