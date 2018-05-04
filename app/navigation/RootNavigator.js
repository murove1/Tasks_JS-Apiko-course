import { SwitchNavigator } from 'react-navigation';

import { screens } from './';
import AuthorizedApplication from './AuthorizedApplicationNavigator';
import UnauthorizedApplication from './UnauthorizedApplicationNavigator';

export default SwitchNavigator(
  {
    [screens.AuthorizedApplication]: { screen: AuthorizedApplication },
    [screens.UnauthorizedApplication]: { screen: UnauthorizedApplication },
  },
  {
    initialRouteName: screens.UnauthorizedApplication,
    // initialRouteName: screens.AuthorizedApplication
  },
);
