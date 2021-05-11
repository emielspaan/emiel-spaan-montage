import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import Carousel from '../Carousel';
import data from '../stories.data/testData';

export default {
  title: 'Carousel/Carousel',
  component: Carousel,
};

const dominantImageColor = '#86356B';
const placeholder = (
  <div
    style={{ backgroundColor: dominantImageColor, height: 300, width: 500 }}
  />
);

export const AutoSlide = () => (
  <Carousel
    autoSlide
    images={
        data.map((item) => {
          const { imageUrl } = item;
          return (
            <ProgressiveImage src={imageUrl} placeholder="">
              {(src, loading) => (loading ? placeholder : <img src={src} alt="an image" />)}
            </ProgressiveImage>
          );
        })
    }
  />
);

export const Slide = () => (
  <Carousel
    images={
        data.map((item) => {
          const { imageUrl } = item;
          return (
            <ProgressiveImage src={imageUrl} placeholder="">
              {(src, loading) => (loading ? placeholder : <img src={src} alt="an image" />)}
            </ProgressiveImage>
          );
        })
    }
  />
);
