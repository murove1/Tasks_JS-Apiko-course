import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';

import styles from '../../styles';

const CreateQuestionScreenView = () => (
  <View style={styles.container}>
    <Text>Create Question page</Text>
  </View>
);

CreateQuestionScreenView.propTypes = {};

CreateQuestionScreenView.navigationOptions = ({ navigation }) => ({
  title: 'Create question',
  headerLeft: <Text onPress={() => navigation.navigate('DrawerToggle')}>Drawer</Text>,
});

export default CreateQuestionScreenView;
