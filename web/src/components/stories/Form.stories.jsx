import React from 'react';
import TextField from '../Form/TextField';
import {
  Select, Option, FormControl, InputLabel,
} from '../Form/Select';
import { Checkbox as MuiCheckbox, FormControlLabel } from '../Form/Checkbox';

export default {
  title: 'Form/Form fields',
};

export const TextInput = () => (
  <TextField fullWidth label="outlined" variant="outlined" color="primary" />
);

export const SelectField = () => (
  <FormControl
    variant="outlined"
    fullWidth
    color="primary"
  >
    <InputLabel>Categories</InputLabel>
    <Select
      label="Categories"
      value="fashion-design"
    >
      <Option value="fashion-design">Jeans</Option>
      <Option value="marketing">Shoes</Option>
      <Option value="retail">Jackets</Option>
      <Option value="other">T-shirts</Option>
    </Select>
  </FormControl>
);

export const Checkbox = () => (
  <FormControlLabel
    label="Shoes"
    control={
      <MuiCheckbox color="primary" />
        }
  />
);
