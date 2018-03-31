import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import SearchInput from './components/SearchInput';
import PostList from './components/PostList';
import MoreButton from './components/MoreButton';
import Loader from './components/Loader';

const URL = 'https://jsonplaceholder.typicode.com/posts';
const LIMIT_COUNT = 10;

const fetchData = () => fetch(URL).then(res => res.json());

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      limitLoadCount: LIMIT_COUNT,
      searchValue: '',
      postsCount: 0,
      isLoading: true
    };
  }

  fetchPost = () => {
    fetchData().then(posts => {
      this.transformPostsList(posts);
    });
  };

  componentDidMount() {
    this.fetchPost();
    this.setState({
      isLoading: !this.state.isLoading
    });

    this.pulling = setInterval(() => {
      console.log('pulling Start!!!');
      this.fetchPost();
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.pulling);
  }

  handleSearch = searchValue => {
    this.setState({ searchValue, limitLoadCount: LIMIT_COUNT });

    this.fetchPost();
  };

  handleLoadMore = () => {
    this.setState({
      limitLoadCount: this.state.limitLoadCount + LIMIT_COUNT
    });

    this.fetchPost();
  };

  transformPostsList = posts => {
    const { limitLoadCount, searchValue } = this.state;

    const filterPosts = posts.filter(post =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    const transformPosts = filterPosts.slice(0, limitLoadCount);

    this.setState({
      posts: transformPosts,
      postsCount: filterPosts.length
    });
  };

  render() {
    const { posts, limitLoadCount, postsCount, isLoading } = this.state;
    console.log('render App');
    console.log('length', posts.length);
    console.log('limitLoadCount', limitLoadCount);
    console.log('postsCount', postsCount);

    return (
      <AppContainer>
        <Header postsCount={postsCount} />
        <SearchInput onSearch={this.handleSearch} />
        {isLoading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <PostList posts={posts} limitLoadCount={limitLoadCount} />
            {postsCount > limitLoadCount &&
              postsCount !== limitLoadCount && (
                <MoreButton onClick={this.handleLoadMore}>Load more</MoreButton>
              )}
          </React.Fragment>
        )}
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`
  text-align: center;
`;
