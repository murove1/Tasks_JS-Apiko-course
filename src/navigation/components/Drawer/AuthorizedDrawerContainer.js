import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withLoadingModal } from '../../../utils/enhancers';
import { AlertService } from '../../../services';
import { authOperations, authSelectors } from '../../../modules/auth';
import * as navigationOperations from '../../../modules/navigation/operations';
import AuthorizedDrawerView from './AuthorizedDrawerView';

const mapStateToProps = state => ({
  isLoading: authSelectors.getSigningOutState(state),
});

const mapDispatchToProps = {
  signOut: authOperations.signOut,
  navigateToUnauthorized: navigationOperations.navigateToUnauthorized,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withLoadingModal.stateProp('isLoading', 'Sign out'),

  withHandlers({
    onSubmit: props => async () => {
      try {
        await props.signOut();

        props.navigateToUnauthorized();
      } catch (err) {
        AlertService.showErrorAlert(err.message);
      }
    },
  }),
);

export default enhancer(AuthorizedDrawerView);
