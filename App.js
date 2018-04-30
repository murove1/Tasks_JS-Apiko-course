import React from 'react';
import { Provider } from 'react-redux';

import { HomeScreen } from './app/screens';
import store from './app/store';

const App = () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);

export default App;
