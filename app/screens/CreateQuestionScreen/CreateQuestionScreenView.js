import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { DrawerButton, Logo } from '../../components';
import s from './styles';
import { headerStyles } from '../../styles';

const CreateQuestionScreenView = () => (
  <View style={s.container}>
    <Text>Create Question page</Text>
  </View>
);

CreateQuestionScreenView.propTypes = {};

CreateQuestionScreenView.navigationOptions = ({ navigation }) => ({
  headerTitle: <Logo header />,
  headerLeft: <DrawerButton onPress={() => navigation.toggleDrawer()} />,
  headerRight: <Text onPress={() => navigation.toggleDrawer()}>Send</Text>,
  ...headerStyles,
});

export default CreateQuestionScreenView;
