import { StackNavigator } from 'react-navigation';

import { screens } from './';
import { AboutUsScreen } from '../screens';

export default StackNavigator({
  [screens.AboutUs]: { screen: AboutUsScreen },
});
