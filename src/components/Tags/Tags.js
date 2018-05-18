import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import s from './styles';

const Tags = () => (
  <View style={s.tags}>
    <Text style={s.tag}>tags</Text>
    <Text style={s.tag}>tags</Text>
    <Text style={s.tag}>tags</Text>
  </View>
);

Tags.propTypes = {};

export default Tags;
