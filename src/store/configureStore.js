import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TodosReducer from '../reducers/todos';

export default () => {
  const rootReducer = combineReducers({
    todos: TodosReducer,
    form: formReducer,
  });

  const store = createStore(rootReducer);

  return store;
};
