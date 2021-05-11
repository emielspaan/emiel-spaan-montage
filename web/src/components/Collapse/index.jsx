import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import { Button } from '../Button';

const showCollapse = `
  max-height: 5000px;
  transition: max-height 1400ms ease;
`;

const hideCollapse = `
  max-height: 0;
  transition: max-height 800ms ease;
`;

const showText = `
  opacity: 1;
  top: 0;
`;

const hideText = `
  opacity: 0;
  top: 60px;
`;

const CollapseContent = styled.div`
  background-color: red;
  overflow: hidden;
  ${(props) => (props.openCollapse ? showCollapse : hideCollapse)};
  
  p {
    overflow: hidden;
    transition: all .45s ease;
    position: relative;
    margin: 0;
    padding: 16px;
    ${({ openCollapse }) => (openCollapse ? showText : hideText)};
  }
`;

const StyledButton = styled(Button)`
  .MuiButton-label {
    justify-content: space-between;
  }
`;

const Collapse = ({ title, description }) => {
  const [open, handleOpen] = useState(false);

  const handleClick = () => {
    handleOpen(!open);
  };

  return (
    <>
      <StyledButton
        fullWidth
        variant="text"
        onClick={handleClick}
        endIcon={open ? <ExpandMore /> : <ExpandLess />}
      >
        <span>{title}</span>
      </StyledButton>
      <CollapseContent openCollapse={open}><p>{description}</p></CollapseContent>
    </>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Collapse;
