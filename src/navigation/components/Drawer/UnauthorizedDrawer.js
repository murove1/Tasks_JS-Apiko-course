import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { DrawerItem, Logo } from '../../../components';
import { screens } from '../../';
import { LinkingService } from '../../../services';
import { globalStyles } from '../../../styles';

const UnauthorizedDrawer = (props) => {
  const items = [
    {
      title: 'Home',
      key: screens.Home,
      iconName: 'chatbubbles',
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
      title: 'Sign Up',
      key: screens.Auth,
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

export default UnauthorizedDrawer;
