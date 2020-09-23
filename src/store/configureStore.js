import { createStore } from 'redux';
import TodosReducer from '../reducers/todos';

export default () => {
  const store = createStore(TodosReducer);

  return store;
};
