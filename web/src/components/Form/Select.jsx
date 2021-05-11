import React from 'react';
import MuiSelect from '@material-ui/core/Select';
import MuiFormControl from '@material-ui/core/FormControl';
import MuiInputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const InputLabel = ({ ...props }) => <MuiInputLabel {...props} />;

const Select = ({ ...props }) => <MuiSelect {...props} />;

const Option = ({ ...props }) => <MenuItem {...props} />;

const FormControl = ({ ...props }) => <MuiFormControl {...props} />;

export {
  Select, Option, FormControl, InputLabel,
};
