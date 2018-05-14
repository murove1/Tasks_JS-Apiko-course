import {
  compose,
  hoistStatics,
  withHandlers,
  withStateHandlers,
} from 'recompose';
import SignInScreenView from './SignInScreenView';
import { screens } from '../../navigation';

const enhancer = compose(

  withStateHandlers(
    {
      email: '',
      password: '',
      isValid: true,
    },
    {
      onChange: () => (field, value) => ({ [field]: value }),
    },
  ),

  withHandlers({
    navigateToRestorePassword: props => () => props.navigation.navigate(screens.RestorePassword),
    onSubmit: props => () => props.navigation.navigate(screens.AuthorizedApplication),
  }),
);

export default hoistStatics(enhancer)(SignInScreenView);
