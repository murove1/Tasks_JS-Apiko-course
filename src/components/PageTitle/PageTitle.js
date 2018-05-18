import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import s from './styles';

const DrawerButton = ({ title }) => (
  <View style={s.container}>
    <Text style={s.title}>{title}</Text>
  </View>
);

DrawerButton.propTypes = {
  title: T.string,
};

export default DrawerButton;
