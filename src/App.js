import React, { useReducer } from 'react';
import Header from './components/Header';
import AddForm from './components/AddForm';
import { addTodo } from './actions/todos';
import List from './components/List';
import TodosReducer from './reducers/todos';
import { connect } from 'react-redux';

const App = () => {
  const initialState = ['a', 'b', 'c'];

  return (
    <div>
      <Header />
      <AddForm />
      <List />
    </div>
  );
};

export default App;
