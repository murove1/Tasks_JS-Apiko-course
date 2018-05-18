import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { Touchable } from '../';
import s from './styles';

const Button = ({ text, onPress }) => (
  <Touchable onPress={onPress} useOpacity>
    <View style={s.button}>
      <Text style={s.text}>{text}</Text>
    </View>
  </Touchable>
);

Button.propTypes = {
  text: T.string,
  onPress: T.func,
};

export default Button;
