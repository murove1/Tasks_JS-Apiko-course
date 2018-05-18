import React from 'react';
import { Platform } from 'react-native';
import T from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { Touchable } from '../';
import s from './styles';
import { colors } from '../../styles';

const DrawerButton = ({ onPress }) => (
  <Touchable style={s.icon} onPress={onPress} useOpacity borderless>
    <Ionicons
      name={`${Platform.select({ ios: 'ios', android: 'md' })}-menu`}
      color={colors.drawerButton.color}
      size={28}
    />
  </Touchable>
);

DrawerButton.propTypes = {
  onPress: T.func,
};

export default DrawerButton;
