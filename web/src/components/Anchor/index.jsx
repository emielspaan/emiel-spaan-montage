import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledAnchor = styled.a`
  text-decoration: none;
`;

const Anchor = ({
  href, target, children,
}) => (
  <StyledAnchor href={href} target={target} rel={target === '_blank' ? 'nofollow noopener' : null}>
    {children}
  </StyledAnchor>
);

Anchor.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node,
};

Anchor.defaultProps = {
  href: null,
  target: null,
  children: null,
};

export default Anchor;
