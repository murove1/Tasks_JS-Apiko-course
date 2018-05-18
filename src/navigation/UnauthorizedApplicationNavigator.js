import { createDrawerNavigator } from 'react-navigation';
import { screens } from './';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';
import AboutUsNavigator from './AboutUsNavigator';
import { UnauthorizedDrawer } from './components/';

export default createDrawerNavigator(
  {
    [screens.Home]: { screen: HomeNavigator },
    [screens.AboutUs]: { screen: AboutUsNavigator },
    [screens.Auth]: { screen: AuthNavigator },
  },
  {
    initialRouteName: screens.HomeNavigator,
    drawerWidth: 300,
    drawerPosition: 'left',
    contentComponent: UnauthorizedDrawer,
  },
);
