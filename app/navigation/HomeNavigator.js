import { StackNavigator } from 'react-navigation';

import { screens } from './';
import { UserQuestionsScreen, UserQuestionScreen } from '../screens';

export default StackNavigator({
  [screens.UserQuestions]: { screen: UserQuestionsScreen },
  [screens.UserQuestion]: { screen: UserQuestionScreen },
});
