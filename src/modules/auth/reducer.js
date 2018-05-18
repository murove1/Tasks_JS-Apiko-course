import { handleActions } from 'redux-actions';
import * as types from './types';
import { appTypes } from '../app';
import { mergeDeep } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  signedIn: false,
  isSigningUp: false,
  isSignUpError: null,

  isSigningIn: false,
  isSignInError: null,

  isSigningOut: false,
  isSignOutError: null,
};

export default handleActions(
  {
    [types.SIGN_UP_START]: mergeDeep({ isSigningUp: true }),
    [types.SIGN_UP_SUCCESS]: mergeDeep({
      isSigningUp: false,
      signedIn: true,
      isSignUpError: null,
    }),
    [types.SIGN_UP_ERROR]: mergeDeep(action => ({
      isSigningUp: false,
      isSignUpError: action.payload.message,
    })),

    [types.SIGN_IN_START]: mergeDeep({ isSigningIn: true }),
    [types.SIGN_IN_SUCCESS]: mergeDeep({
      isSigningIn: false,
      signedIn: true,
      isSignInError: null,
    }),
    [types.SIGN_IN_ERROR]: mergeDeep(action => ({
      isSigningIn: false,
      isSignInError: action.payload.message,
    })),

    [types.SIGN_OUT_START]: mergeDeep({ isSigningOut: true }),
    [types.SIGN_OUT_SUCCESS]: mergeDeep({
      isSigningOut: false,
      signedIn: false,
      isSignOutError: null,
    }),
    [types.SIGN_OUT_ERROR]: mergeDeep(action => ({
      isSigningOut: false,
      isSignOutError: action.payload.message,
    })),

    [appTypes.INITIALIZED]: mergeDeep({ signedIn: true }),
  },
  INITIAL_STATE,
);
