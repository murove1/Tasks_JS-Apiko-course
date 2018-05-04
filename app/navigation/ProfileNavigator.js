import { StackNavigator } from 'react-navigation';

import { screens } from './';
import { ProfileScreen } from '../screens';

export default StackNavigator({
  [screens.Profile]: { screen: ProfileScreen },
});
