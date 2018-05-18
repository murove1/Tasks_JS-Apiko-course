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
import SignInScreenView from './SignInScreenView';

const mapStateToProps = state => ({
  isLoading: authSelectors.getSigningInState(state),
});

const mapDispatchToProps = {
  signIn: authOperations.signIn,
  navigateToAuthorized: navigationOperations.navigateToAuthorized,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withLoadingModal.stateProp('isLoading', 'Sign in'),

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
    onSubmit: props => async () => {
      if (props.isValid) {
        try {
          await props.signIn(R.pick(['email', 'password'], props));

          props.navigateToAuthorized();
        } catch (err) {
          AlertService.showErrorAlert(err.message);
        }
      }
    },
  }),

  withPropsOnChange(['email', 'password'], (props) => {
    const isValid =
      props.email.trim().includes('@') &&
      props.password.trim().length > 6;

    props.onChange('isValid', isValid);
  }),
);

export default hoistStatics(enhancer)(SignInScreenView);
