import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import{ store, persistor} from './store';
import TodoApp from './TodoApp';
import "./index.css";
import "./input.css";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <TodoApp />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
