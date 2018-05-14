import React from 'react';
import T from 'prop-types';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { DrawerItem, Logo } from '../../../components';
import { screens } from '../../';
import { LinkingService, AlertService } from '../../../services';
import { globalStyles } from '../../../styles';

const AuthorizedDrawer = (props) => {
  const items = [
    {
      title: 'Home',
      key: screens.Home,
      iconName: 'chatbubbles',
    },
    {
      title: 'Search',
      key: screens.Search,
      iconName: 'search',
    },
    {
      title: 'Create question',
      key: screens.CreateQuestion,
      iconName: 'add-circle',
    },
    {
      title: 'Profile',
      key: screens.Profile,
      iconName: 'person',
    },
    {
      separator: true,
      key: 'separator',
    },
    {
      title: 'About Us',
      key: screens.AboutUs,
      iconName: 'information-circle',
    },
    {
      title: 'Terms & Conditions',
      key: 'Terms',
      onPress: () => LinkingService.openTerms(),
      iconName: 'document',
    },
    {
      separator: true,
      key: 'separator',
    },
    {
      title: 'Sign out',
      key: 'SignOut',
      onPress: () =>
        AlertService.signOut(() => props.navigation.navigate(screens.UnauthorizedApplication)),
      iconName: 'log-in',
    },
  ];

  return (
    <ScrollView>
      <SafeAreaView
        style={globalStyles.fillAll}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <Logo drawer borderBottom />

        {items.map((item, index) => (
          <DrawerItem
            key={`${item.key}-${index}`} // eslint-disable-line
            {...props}
            item={item}
          />
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};

AuthorizedDrawer.propTypes = {
  navigation: T.shape({
    navigate: T.func,
  }),
};

export default AuthorizedDrawer;
