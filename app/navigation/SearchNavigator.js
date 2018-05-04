import { StackNavigator } from 'react-navigation';

import { screens } from './';
import { SearchScreen, UserQuestionScreen } from '../screens';

export default StackNavigator({
  [screens.Search]: { screen: SearchScreen },
  [screens.UserQuestion]: { screen: UserQuestionScreen },
});
