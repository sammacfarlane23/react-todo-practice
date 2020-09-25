import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import App from './App';
import { addTodo } from './actions/todos';
import uuid from 'react-uuid';

const store = configureStore();

store.dispatch(
  addTodo({
    text: 'First todo',
    id: uuid(),
  })
);
store.dispatch(
  addTodo({
    text: 'Second todo',
    id: uuid(),
  })
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
