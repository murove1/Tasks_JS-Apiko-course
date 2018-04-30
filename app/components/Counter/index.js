import { connect } from 'react-redux';
import { compose, withProps, withHandlers } from 'recompose';

import Counter from './Counter';
import { counterOperations, counterSelectors } from '../../modules/counter';

const AMOUNT = 1;

const mapStateToProps = state => ({
  counter: counterSelectors.getCounterValue(state),
});

const enhancer = compose(
  connect(mapStateToProps),
  withProps(({ counter }) => ({
    value: counter,
  })),
  withHandlers({
    onIncrement: ({ dispatch }) => () => dispatch(counterOperations.setIncrement(AMOUNT)),
    onDecrement: ({ dispatch }) => () => dispatch(counterOperations.setDecrement(AMOUNT)),
  }),
)(Counter);

export default enhancer;
