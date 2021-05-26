import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const StyledAnchor = styled(Link)`
  text-decoration: none;
`;

const Anchor = ({
  href, children,
}) => (
  <StyledAnchor to={href}>
    {children}
  </StyledAnchor>
);

Anchor.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

Anchor.defaultProps = {
  href: null,
  children: null,
};

export default Anchor;
