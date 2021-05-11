import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const MuiTypography = ({
  align,
  children,
  classes,
  color,
  display,
  gutterBottom,
  noWrap,
  paragraph,
  variant,
  variantMapping,
}) => (
  <Typography
    align={align}
    classes={classes}
    color={color}
    display={display}
    gutterBottom={gutterBottom}
    noWrap={noWrap}
    paragraph={paragraph}
    variant={variant}
    variantMapping={variantMapping}
  >
    {children}
  </Typography>
);

MuiTypography.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.shape({}),
  color: PropTypes.string,
  display: PropTypes.string,
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  paragraph: PropTypes.bool,
  variant: PropTypes.string,
  variantMapping: PropTypes.shape({}),
};

MuiTypography.defaultProps = {
  align: 'inherit',
  children: null,
  classes: null,
  color: 'initial',
  display: 'initial',
  gutterBottom: false,
  noWrap: false,
  paragraph: false,
  variant: 'body1',
  variantMapping: null,
};

export default Typography;
