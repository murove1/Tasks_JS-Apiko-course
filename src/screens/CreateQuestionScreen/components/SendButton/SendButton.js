import React from 'react';
import { Text } from 'react-native';
import T from 'prop-types';
import { Touchable } from '../../../../components';
import s from './styles';

const SendButton = ({ active, onPress }) => (
  <Touchable style={s.button} onPress={onPress} useOpacity borderless>
    <Text style={[s.text, active && s.active]}>Send</Text>
  </Touchable>
);

SendButton.propTypes = {
  active: T.bool,
  onPress: T.func,
};

export default SendButton;
