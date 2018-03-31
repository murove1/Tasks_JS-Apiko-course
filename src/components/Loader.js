import React from 'react';
import styled from 'styled-components';

const Loader = () => (
  <LoaderContainer>
    <span />
    <span />
    <span />
  </LoaderContainer>
);

export default Loader;

const LoaderContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: relative;
  margin: 0 auto;

  & span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #61dafb;
    margin: 35px 5px;
    opacity: 0;
  }

  & span:nth-child(1) {
    animation: opacitychange 1s ease-in-out infinite;
  }

  & span:nth-child(2) {
    animation: opacitychange 1s ease-in-out 0.33s infinite;
  }

  & span:nth-child(3) {
    animation: opacitychange 1s ease-in-out 0.66s infinite;
  }

  @keyframes opacitychange {
    0%,
    100% {
      opacity: 0;
    }

    60% {
      opacity: 1;
    }
  }
`;
