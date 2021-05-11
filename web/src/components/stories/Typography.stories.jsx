import React from 'react';
import Typography from '../Typography';

export default {
  title: 'Typography/Typography',
  component: Typography,
};

export const Headings = () => (
  <>
    <Typography variant="h1">Headline 1</Typography>
    <Typography variant="h2">Headline 2</Typography>
    <Typography variant="h3">Headline 3</Typography>
    <Typography variant="h4">Headline 4</Typography>
    <Typography variant="h5">Headline 5</Typography>
    <Typography variant="h6">Headline 6</Typography>
  </>
);

export const BodyText = () => (
  <>
    <Typography variant="body1">Body1</Typography>
    <Typography variant="body2">Body2</Typography>
  </>
);

export const Subtitles = () => (
  <>
    <Typography variant="subtitle1">Subtitle1</Typography>
    <Typography variant="subtitle2">Subtitle2</Typography>
  </>
);

export const Caption = () => (
  <>
    <Typography variant="caption">Caption</Typography>
  </>
);

export const Button = () => (
  <>
    <Typography variant="button">Button</Typography>
  </>
);

export const Overline = () => (
  <>
    <Typography variant="overline">Overline</Typography>
  </>
);
