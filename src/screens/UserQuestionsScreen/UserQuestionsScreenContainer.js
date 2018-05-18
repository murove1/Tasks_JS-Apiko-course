import { compose, hoistStatics, withHandlers } from 'recompose';
import UserQuestionsScreenView from './UserQuestionsScreenView';
import { screens } from '../../navigation';

const enhancer = compose(
  withHandlers({
    navigateToUserQuestion: props => () => props.navigation.navigate(screens.UserQuestion),
  }),
);

export default hoistStatics(enhancer)(UserQuestionsScreenView);
