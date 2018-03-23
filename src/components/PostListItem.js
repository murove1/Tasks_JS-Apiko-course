import React from 'react';
import PropTypes from 'prop-types';

const PostListItem = ({ post }) => (
  <div className="post">
    <h1>{post.title}</h1>
    <p>{post.body}</p>
  </div>
);

export default PostListItem;

PostListItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};
