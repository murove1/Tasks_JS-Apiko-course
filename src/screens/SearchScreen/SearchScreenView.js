import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { DrawerButton, OptionsButton, Logo } from '../../components';
import { screens } from '../../navigation';
import s from './styles';
import { headerStyles } from '../../styles';

const SearchScreenView = ({ navigation }) => (
  <View style={s.container}>
    <Text>Search page</Text>
    <Text onPress={() => navigation.navigate(screens.UserQuestion)}>
      Go to found question page!
    </Text>
  </View>
);

SearchScreenView.propTypes = {
  navigation: T.object,
};

SearchScreenView.navigationOptions = ({ navigation }) => ({
  headerTitle: <Logo header />,
  headerLeft: <DrawerButton onPress={() => navigation.toggleDrawer()} />,
  headerRight: <OptionsButton onPress={() => navigation.toggleDrawer()} />,
  ...headerStyles,
});

export default SearchScreenView;
