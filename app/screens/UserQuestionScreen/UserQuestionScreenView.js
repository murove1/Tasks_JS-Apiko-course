import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { Logo } from '../../components';
import s from './styles';
import { headerStyles } from '../../styles';

const UserQuestionScreenView = () => (
  <View style={s.container}>
    <Text>Hello world</Text>
  </View>
);

UserQuestionScreenView.propTypes = {};

UserQuestionScreenView.navigationOptions = {
  headerTitle: <Logo header />,
  headerRight: <View />,
  ...headerStyles,
};

export default UserQuestionScreenView;
