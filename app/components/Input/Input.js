import React from 'react';
import { TextInput } from 'react-native';
import T from 'prop-types';
import { colors } from '../../styles';
import s from './styles';

const Input = ({
  value,
  placeholder,
  onChange,
  secureTextEntry,
}) => (
  <TextInput
    style={s.input}
    value={value}
    placeholder={placeholder}
    onChangeText={onChange}
    secureTextEntry={secureTextEntry}
    underlineColorAndroid={colors.input.background}
  />
);

Input.propTypes = {
  value: T.string,
  placeholder: T.string,
  secureTextEntry: T.bool,
  onChange: T.func,
};

export default Input;
