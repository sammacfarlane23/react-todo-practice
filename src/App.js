import React from 'react';
import uuid from 'react-uuid';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddForm from './components/AddForm';
import List from './components/List';
import { addTodo } from './actions/todos';

const App = (props) => {
  const submit = (values) => {
    props.addTodo({
      id: uuid(),
      text: values.text,
    });
    values.text = '';
  };

  return (
    <div className='container-fluid d-flex justify-content-center'>
      <div className='col-sm-8 '>
        <Header />
        <AddForm onSubmit={submit} />
        <List />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
  };
};

export default connect(null, mapDispatchToProps)(App);
