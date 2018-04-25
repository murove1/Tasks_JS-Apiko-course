import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class componentName extends Component {
  constructor() {
    super();

    this.state = {
      value: 0
    };
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    const { value } = this.state;

    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={this.handleIncrement}>
          <Text>+</Text>
        </TouchableOpacity>
        <Text style={styles.counterValue}>{value}</Text>
        <TouchableOpacity style={styles.button} onPress={this.handleDecrement}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  counterValue: {
    fontSize: 64
  }
});
