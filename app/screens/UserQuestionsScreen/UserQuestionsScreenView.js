import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';

import styles from '../../styles';
import { screens } from '../../navigation';

const UserQuestionsScreenView = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.link} onPress={() => navigation.navigate(screens.UserQuestion)}>
      Go to Question page!
    </Text>
  </View>
);

UserQuestionsScreenView.propTypes = {
  navigation: T.object,
};

UserQuestionsScreenView.navigationOptions = ({ navigation }) => ({
  title: 'Home',
  headerLeft: <Text onPress={() => navigation.navigate('DrawerToggle')}>Drawer</Text>,
});

export default UserQuestionsScreenView;
