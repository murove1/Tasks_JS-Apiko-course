import { handleActions } from 'redux-actions';
import { authTypes } from '../auth';

const INITIAL_STATE = null;

export default handleActions(
  {
    // [authTypes.SIGN_OUT_SUCCESS]: INITIAL_STATE,
  },
  INITIAL_STATE,
);
