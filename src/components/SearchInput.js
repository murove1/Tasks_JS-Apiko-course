import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ value });

    this.props.onSearch(value);
  };

  render() {
    return (
      <Input
        type="text"
        value={this.state.value}
        placeholder="Enter text for search"
        onChange={this.handleChange}
      />
    );
  }
}

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchInput;

const Input = styled.input`
  width: 300px;
  margin-top: 20px;
  padding: 5px 5px;
  text-align: center;
  border: 2px solid #222222;
  border-radius: 4px;
  outline: none;
  transition: 0.3s;

  :focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }
`;
