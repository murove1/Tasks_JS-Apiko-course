import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class PostListItem extends Component {
  shouldComponentUpdate = nextProps => {
    console.log('shouldComponentUpdate');
    console.log('this.props', this.props);
    console.log('nextProps', nextProps);
    if (
      this.props.post.title === nextProps.post.title &&
      this.props.post.body === nextProps.post.body
    ) {
      return false;
    }
    return true;
  };

  render() {
    console.log('render ListItem');

    const { post: { title, body } } = this.props;

    return (
      <Post>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </Post>
    );
  }
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};

export default PostListItem;

const Post = styled.div`
  border: 1px solid #222222;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  padding: 10px;
  :last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  font-size: 21px;
`;

const Body = styled.p`
  font-size: 18px;
`;
