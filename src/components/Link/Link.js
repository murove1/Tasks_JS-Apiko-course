import React from 'react';
import { Text } from 'react-native';
import T from 'prop-types';
import { Touchable } from '../';
import s from './styles';

const Link = ({ text, onPress }) => (
  <Touchable onPress={onPress} useOpacity>
    <Text style={s.text}>{text}</Text>
  </Touchable>
);

Link.propTypes = {
  text: T.string,
  onPress: T.func,
};

export default Link;
