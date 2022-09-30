import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './App.less';
import './App.scss';

import AppRoutes from './components/AppRoutes';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
