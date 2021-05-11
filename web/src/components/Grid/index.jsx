import React from 'react';
import PropTypes from 'prop-types';
import MUIGrid from '@material-ui/core/Grid';

const Grid = ({ children, ...props }) => (
  <MUIGrid {...props}>
    {children}
  </MUIGrid>
);

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
