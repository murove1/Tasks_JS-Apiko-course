import {
  compose,
  hoistStatics,
  withHandlers,
  withStateHandlers,
  withPropsOnChange,
} from 'recompose';
import * as R from 'ramda';
import { connect } from 'react-redux';
import { withLoadingModal } from '../../utils/enhancers';
import { AlertService } from '../../services';
import { authOperations, authSelectors } from '../../modules/auth';
import * as navigationOperations from '../../modules/navigation/operations';
import { screens } from '../../navigation';
import SignUpScreenView from './SignUpScreenView';

const mapStateToProps = state => ({
  isLoading: authSelectors.getSigningUpState(state),
});

const mapDispatchToProps = {
  signUp: authOperations.signUp,
  navigateToAuthorized: navigationOperations.navigateToAuthorized,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withLoadingModal.stateProp('isLoading', 'Sign up'),

  withStateHandlers(
    {
      username: '',
      email: '',
      password: '',
      isValid: true,
    },
    {
      onChange: () => (field, value) => ({ [field]: value }),
    },
  ),

  withHandlers({
    navigateToSignIn: props => () => props.navigation.navigate(screens.SignIn),
    onSubmit: props => async () => {
      if (props.isValid) {
        try {
          await props.signUp(R.pick(['username', 'password', 'email'], props));

          props.navigateToAuthorized();
        } catch (err) {
          AlertService.showErrorAlert(err.message);
        }
      }
    },
  }),

  withPropsOnChange(['username', 'email', 'password'], (props) => {
    const isValid =
      props.username.trim().length > 0 &&
      props.email.trim().includes('@') &&
      props.password.trim().length > 6;

    props.onChange('isValid', isValid);
  }),
);

export default hoistStatics(enhancer)(SignUpScreenView);
