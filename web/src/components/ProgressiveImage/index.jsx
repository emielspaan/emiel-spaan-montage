import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ProgressiveImage from 'react-progressive-image';

const Image = (src, img, placeholder, children) => (
  <ProgressiveImage src={src} placeholder={placeholder}>
    {children}
  </ProgressiveImage>
);

export default Image;
