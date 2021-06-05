import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import CardContainer from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { GatsbyImage } from 'gatsby-plugin-image';
import Typography from '../Typography';

const StyledTypography = styled(Typography)`
  &&& {
    margin-bottom: 12px;
    text-transform: uppercase;
    text-align: center;
  }
`;

const StyledCardContainer = styled(CardContainer)`
  cursor: pointer;
`;

const Card = ({
  image,
  headingTag,
  cardHeading,
  bodyTag,
  cardBody,
}) => (
  <StyledCardContainer>
    <CardMedia
      component="div"
    >
      <GatsbyImage
        image={image}
        alt={cardHeading}
      />
    </CardMedia>
    <CardContent>
      <StyledTypography variant={headingTag}>
        {cardHeading}
      </StyledTypography>
      <Typography variant={bodyTag}>
        {cardBody}
      </Typography>
    </CardContent>
  </StyledCardContainer>
);

Card.propTypes = {
  image: PropTypes.string,
  headingTag: PropTypes.string,
  cardHeading: PropTypes.string,
  bodyTag: PropTypes.string,
  cardBody: PropTypes.string,
};

Card.defaultProps = {
  image: null,
  headingTag: 'h5',
  cardHeading: null,
  bodyTag: 'body2',
  cardBody: null,
};

export default Card;
