import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import {
  Touchable,
  DrawerButton,
  OptionsButton,
  Logo,
  PageTitle,
  QuestionsList,
} from '../../components';
import { globalStyles, headerStyles } from '../../styles';
import s from './styles';

const UserQuestionsScreenView = ({ navigateToUserQuestion }) => (
  <View style={[globalStyles.fillAll, s.container]}>
    <PageTitle title="User questions" />
    <QuestionsList />
    <Touchable onPress={navigateToUserQuestion}>
      <Text>Go to Question page!</Text>
    </Touchable>
  </View>
);

UserQuestionsScreenView.propTypes = {
  navigateToUserQuestion: T.func,
};

UserQuestionsScreenView.navigationOptions = ({ navigation }) => ({
  headerTitle: <Logo header />,
  headerLeft: <DrawerButton onPress={() => navigation.toggleDrawer()} />,
  headerRight: <OptionsButton onPress={() => navigation.toggleDrawer()} />,
  ...headerStyles,
});

export default UserQuestionsScreenView;
