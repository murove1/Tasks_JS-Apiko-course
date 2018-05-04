import { DrawerNavigator } from 'react-navigation';

import { screens } from './';
import HomeNavigator from './HomeNavigator';
import AboutUsNavigator from './AboutUsNavigator';
import CreateQuestionNavigator from './CreateQuestionNavigator';
import ProfileNavigator from './ProfileNavigator';
import SearchNavigator from './SearchNavigator';

export default DrawerNavigator({
  [screens.UserQuestions]: { screen: HomeNavigator },
  [screens.Search]: { screen: SearchNavigator },
  [screens.CreateQuestion]: { screen: CreateQuestionNavigator },
  [screens.Profile]: { screen: ProfileNavigator },
  [screens.AboutUs]: { screen: AboutUsNavigator },
});
