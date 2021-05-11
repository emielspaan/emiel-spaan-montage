import React from 'react';
import { Button } from '../Button';

export default {
  title: 'Buttons/Buttons',
  component: Button,
};

export const ButtonOutlined = () => (
  <Button variant="outlined">Button</Button>
);

export const ButtonWithPrimaryColor = () => (
  <Button variant="outlined" color="primary">Button</Button>
);

export const ButtonWithSecondaryColor = () => (
  <Button variant="outlined" color="secondary">Button</Button>
);

export const ButtonContainedWithPrimaryColor = () => (
  <Button variant="contained" color="primary">Button</Button>
);

export const ButtonContainedWithSecondaryColor = () => (
  <Button variant="contained" color="secondary">Button</Button>
);
