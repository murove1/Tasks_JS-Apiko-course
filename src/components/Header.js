import React from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';

const Header = ({ postsCount }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Homework3</h1>
    <h3>Posts({postsCount})</h3>
  </header>
);

export default Header;

Header.propTypes = {
  postsCount: PropTypes.number.isRequired
};
