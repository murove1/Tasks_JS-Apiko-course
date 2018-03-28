import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PostListItem from './PostListItem';

const PostList = ({ posts, limitLoadCount }) => {
  return (
    <PostContaner>
      {posts.length ? (
        posts
          .slice(0, limitLoadCount)
          .map(post => <PostListItem key={post.id} post={post} />)
      ) : (
        <InfoBlock>Posts no found!</InfoBlock>
      )}
    </PostContaner>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })
  ).isRequired
};

export default PostList;

const PostContaner = styled.div`
  width: 700px;
  margin: 0 auto;
  padding: 20px 0;
`;

const InfoBlock = styled.h1`
  font-size: 24px;
`;
