import React from 'react';
import PropTypes from 'prop-types';
import CardContainer from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '../Typography';

const Card = ({
  cssBackgroundImage,
  image,
  headingTag,
  cardHeading,
  bodyTag,
  cardBody,
}) => (
  <CardContainer>
    <CardMedia
      component="img"
      image={cssBackgroundImage}
      src={image}
    />
    <CardContent>
      <Typography variant={headingTag}>
        {cardHeading}
      </Typography>
      <Typography variant={bodyTag}>
        {cardBody}
      </Typography>
    </CardContent>
  </CardContainer>
);

Card.propTypes = {
  cssBackgroundImage: PropTypes.string,
  image: PropTypes.string,
  headingTag: PropTypes.string,
  cardHeading: PropTypes.string,
  bodyTag: PropTypes.string,
  cardBody: PropTypes.string,
};

Card.defaultProps = {
  cssBackgroundImage: null,
  image: null,
  headingTag: 'h5',
  cardHeading: null,
  bodyTag: 'body2',
  cardBody: null,
};

export default Card;
