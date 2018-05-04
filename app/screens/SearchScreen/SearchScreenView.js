import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';

import styles from '../../styles';
import { screens } from '../../navigation';

const SearchScreenView = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Search page</Text>
    <Text style={styles.link} onPress={() => navigation.navigate(screens.UserQuestion)}>
      Go to found question page!
    </Text>
  </View>
);

SearchScreenView.propTypes = {
  navigation: T.object,
};

SearchScreenView.navigationOptions = ({ navigation }) => ({
  title: 'Search',
  headerLeft: <Text onPress={() => navigation.navigate('DrawerToggle')}>Drawer</Text>,
});

export default SearchScreenView;
