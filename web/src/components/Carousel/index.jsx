import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const IconContainer = styled.span`
    background-color: white;
    cursor: pointer;
    position: absolute;
    top: calc(50% - 12px);
    ${(props) => (props.left ? 'left: 5%' : null)};
    ${(props) => (props.right ? 'right: 5%' : null)};

    svg {
      padding: 8px;
    }
`;

const ImageContainer = styled.div`
    text-align: center;
    position: relative;
    width: 500px;
    height: 350px;
    margin: 0 auto;

    img {
      object-fit: cover;
      width: 500px;
      height: 350px;
      opacity: 100%;
      transition: opacity 0.4s;
    }
`;

const Carousel = ({ images, autoSlide }) => {
  const [active, setActive] = useState(0);
  const lastImage = images.length - 1;
  const firstImage = 0;
  const nextImage = active + 1;
  const previousImage = active - 1;

  const handleRight = () => {
    setActive(active === lastImage ? firstImage : nextImage);
  };

  const handleLeft = () => {
    setActive(active === firstImage ? lastImage : previousImage);
  };

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        setActive(active === lastImage ? firstImage : nextImage);
      }, 2000);
      return () => clearInterval(interval);
    }
    return null;
  });

  return (
    <>
      <ImageContainer autoSlide={autoSlide}>
        {images[active]}
        <IconContainer left onClick={handleLeft}>
          <KeyboardArrowLeftIcon />
        </IconContainer>
        <IconContainer right>
          <KeyboardArrowRightIcon onClick={handleRight} />
        </IconContainer>
      </ImageContainer>
    </>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.node).isRequired,
  autoSlide: PropTypes.bool,
};

Carousel.defaultProps = {
  autoSlide: false,
};

export default Carousel;
