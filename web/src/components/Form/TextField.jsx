import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const TextInput = ({ ...props }) => (
  <TextField {...props} />
);

export default TextInput;
