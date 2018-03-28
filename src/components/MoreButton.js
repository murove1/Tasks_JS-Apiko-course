import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MoreButton = ({ onClick, children }) => (
  <Button onClick={onClick}>{children}</Button>
);

export default MoreButton;

MoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node]).isRequired
};

const Button = styled.button`
  background-color: #61dafb;
  color: #222222;
  font-size: 18px;
  font-weight: 700;
  border-color: #222222;
  cursor: pointer;
  padding: 10px 35px;
  margin-bottom: 20px;
`;
