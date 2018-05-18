import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { DrawerButton, Logo, PageTitle } from '../../components';
import { SendButton } from './components';
import { globalStyles, headerStyles } from '../../styles';
import s from './styles';

const CreateQuestionScreenView = () => (
  <View style={[s.container, globalStyles.fillAll]}>
    <PageTitle title="Create questions" />
    <Text>Create Question page</Text>
  </View>
);

CreateQuestionScreenView.propTypes = {};

CreateQuestionScreenView.navigationOptions = ({ navigation }) => ({
  headerTitle: <Logo header />,
  headerLeft: <DrawerButton onPress={() => navigation.toggleDrawer()} />,
  headerRight: <SendButton active />,
  ...headerStyles,
});

export default CreateQuestionScreenView;
