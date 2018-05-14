import { connect } from 'react-redux';
import { compose, withHandlers, hoistStatics } from 'recompose';
import RestorePasswordScreenView from './RestorePasswordScreenView';

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withHandlers({
    onSubmit: props => () => props.navigation.goBack(),
  }),

);

export default hoistStatics(enhancer)(RestorePasswordScreenView);
