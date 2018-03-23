import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import PostList from './components/PostList';
import MoreButton from './components/MoreButton';
import data from './data.json';

const getPosts = (skip = 0, count) => data.slice(skip, skip + count);

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      limitLoadCount: 10
    };
  }

  componentDidMount() {
    this.handleGetPost();
  }

  handleGetPost = () => {
    const { posts, limitLoadCount } = this.state;
    const newPosts = getPosts(posts.length, limitLoadCount);

    this.setState({ posts: [...posts, ...newPosts] });
  };

  handleLoadMore = () => {
    this.handleGetPost();
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        <Header postsCount={posts.length} />
        <PostList posts={posts} />
        {posts.length !== data.length && (
          <MoreButton onClick={this.handleLoadMore}>Load more!</MoreButton>
        )}
      </div>
    );
  }
}

export default App;
