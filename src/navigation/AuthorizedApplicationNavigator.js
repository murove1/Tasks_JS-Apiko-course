import { createDrawerNavigator } from 'react-navigation';
import { screens } from './';
import HomeNavigator from './HomeNavigator';
import AboutUsNavigator from './AboutUsNavigator';
import CreateQuestionNavigator from './CreateQuestionNavigator';
import ProfileNavigator from './ProfileNavigator';
import SearchNavigator from './SearchNavigator';
import { AuthorizedDrawerContainer } from './components/';

export default createDrawerNavigator(
  {
    [screens.Home]: { screen: HomeNavigator },
    [screens.Search]: { screen: SearchNavigator },
    [screens.CreateQuestion]: { screen: CreateQuestionNavigator },
    [screens.Profile]: { screen: ProfileNavigator },
    [screens.AboutUs]: { screen: AboutUsNavigator },
  },
  {
    initialRouteName: screens.HomeNavigator,
    drawerWidth: 300,
    drawerPosition: 'left',
    contentComponent: AuthorizedDrawerContainer,
  },
);
