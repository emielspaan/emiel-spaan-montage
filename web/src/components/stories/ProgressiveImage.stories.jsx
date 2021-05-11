import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import Image from '../ProgressiveImage';
import data from '../stories.data/testData';

export default {
  title: 'ProgressiveImage/ProgressiveImage',
};

const dominantImageColor = '#86356B';
const placeholder = (
  <div
    style={{ backgroundColor: dominantImageColor, height: 300, width: 500 }}
  />
);

export const Plaatje = () => (
  <ProgressiveImage src={data[0].imageUrl} placeholder="">
    {(src, loading) => (loading ? placeholder : <img src={src} alt="an image" />)}
  </ProgressiveImage>
);
