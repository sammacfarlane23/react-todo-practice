import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import axios from 'axios';
import App from './App';
import { addTodo } from './actions/todos';
import './styles/styles.scss';

const store = configureStore();

axios.get('https://jsonplaceholder.typicode.com/users/1/todos').then((res) => {
  res.data.forEach((todo) => {
    if (todo.id < 4) {
      store.dispatch(
        addTodo({
          text: todo.title,
          id: todo.id,
        })
      );
    }
  });
});

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
