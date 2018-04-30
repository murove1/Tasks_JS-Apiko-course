import React from 'react';
import T from 'prop-types';
import { View, Text } from 'react-native';

import { Button } from '../';
import s from './styles';

const Counter = ({ value, onIncrement, onDecrement }) => (
  <View>
    <Button onPress={onIncrement}>
      <Text>+</Text>
    </Button>
    <Text style={s.countValue}>{value}</Text>
    <Button onPress={onDecrement}>
      <Text>-</Text>
    </Button>
  </View>
);

Counter.propTypes = {
  value: T.number,
  onIncrement: T.func,
  onDecrement: T.func,
};

export default Counter;
