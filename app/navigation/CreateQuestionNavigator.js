import { StackNavigator } from 'react-navigation';

import { screens } from './';
import { CreateQuestionScreen } from '../screens';

export default StackNavigator({
  [screens.CreateQuestion]: { screen: CreateQuestionScreen },
});
