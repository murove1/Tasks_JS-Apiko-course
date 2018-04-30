import React from 'react';
import T from 'prop-types';
import { TouchableOpacity } from 'react-native';

import s from './styles';

const noop = () => {};

const Button = ({ onPress = noop, children }) => (
  <TouchableOpacity style={s.button} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: T.func,
  children: T.element,
};

export default Button;
