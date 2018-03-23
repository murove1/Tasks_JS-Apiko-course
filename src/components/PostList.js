import React from 'react';
import PropTypes from 'prop-types';

import PostListItem from './PostListItem';

const PostList = ({ posts }) => (
  <div className="postContainer">
    {posts.map(post => <PostListItem key={post.id} post={post} />)}
  </div>
);

export default PostList;

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })
  ).isRequired
};
