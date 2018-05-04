import { StackNavigator } from 'react-navigation';

import { screens } from './';
import { SignUpScreen, SignInScreen, RestorePasswordScreen } from '../screens';

export default StackNavigator({
  [screens.SignUp]: { screen: SignUpScreen },
  [screens.SignIn]: { screen: SignInScreen },
  [screens.RestorePassword]: { screen: RestorePasswordScreen },
});
