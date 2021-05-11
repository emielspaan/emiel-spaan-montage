import React from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import MuiFormControlLabel from '@material-ui/core/FormControlLabel';

const Checkbox = ({ ...props }) => (
  <MuiCheckbox {...props} />
);

const FormControlLabel = ({ ...props }) => (
  <MuiFormControlLabel {...props} />
);

export { Checkbox, FormControlLabel };
