import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import SearchInput from './components/SearchInput';
import PostList from './components/PostList';
import MoreButton from './components/MoreButton';
import data from './data.json';

const LIMIT_COUNT = 10;

const getPosts = (searchValue = '') =>
  data.filter(post =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      limitLoadCount: LIMIT_COUNT
    };
  }

  componentDidMount() {
    const posts = getPosts();
    this.setState({ posts });
  }

  handleSearch = searchValue => {
    const posts = getPosts(searchValue);

    this.setState({ posts, limitLoadCount: LIMIT_COUNT });
  };

  handleLoadMore = () => {
    this.setState({ limitLoadCount: this.state.limitLoadCount + 10 });
  };

  render() {
    const { posts, limitLoadCount } = this.state;

    return (
      <AppContainer>
        <Header postsCount={posts.length} />
        <SearchInput onSearch={this.handleSearch} />
        <PostList posts={posts} limitLoadCount={limitLoadCount} />
        {posts.length > limitLoadCount &&
          posts.length !== limitLoadCount && (
            <MoreButton onClick={this.handleLoadMore}>Load more!</MoreButton>
          )}
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`
  text-align: center;
`;
