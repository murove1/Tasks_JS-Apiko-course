import React from 'react';
import { Provider } from 'react-redux';

import Navigation from './app/navigation';
import store from './app/store';

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
