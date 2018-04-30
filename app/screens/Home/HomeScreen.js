import React from 'react';
import { View } from 'react-native';
import s from './styles';

import Counter from '../../components/Counter';

const HomeScreen = () => (
  <View style={s.container}>
    <Counter />
  </View>
);

export default HomeScreen;
