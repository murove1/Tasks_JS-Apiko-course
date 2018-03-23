import React from 'react';
import PropTypes from 'prop-types';

const MoreButton = ({ onClick, children }) => (
  <button className="button" onClick={onClick}>
    {children}
  </button>
);

export default MoreButton;

MoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node]).isRequired
};
