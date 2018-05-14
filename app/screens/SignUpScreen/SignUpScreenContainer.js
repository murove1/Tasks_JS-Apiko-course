import {
  compose,
  hoistStatics,
  withHandlers,
  withStateHandlers,
  withPropsOnChange,
} from 'recompose';
import * as R from 'ramda';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../../modules/auth';
import SignUpScreenView from './SignUpScreenView';
import { screens } from '../../navigation';

const mapStateToProps = state => ({
  isLoading: authSelectors.getSigningUpState(state),
});

const mapDispatchToProps = {
  signUp: authOperations.signUp,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),

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
    onSubmit: props => () => {
      if (props.isValid) {
        props.signUp(R.pick(['username', 'password', 'email'], props));
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
