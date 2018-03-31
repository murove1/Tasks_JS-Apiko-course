import React from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import styled from 'styled-components';

const Header = ({ postsCount }) => (
  <HeaderContainer>
    <Logo src={logo} alt="logo" />
    <Title>Homework5</Title>
    <PostsCount>Posts({postsCount})</PostsCount>
  </HeaderContainer>
);

Header.propTypes = {
  postsCount: PropTypes.number.isRequired
};

export default Header;

const HeaderContainer = styled.div`
  background-color: #222;
  height: 180px;
  padding: 10px;
  color: #fff;
`;

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const PostsCount = styled.h3`
  font-size: 1em;
`;
