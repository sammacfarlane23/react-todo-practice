import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';

const AddForm = (props) => {
  const [entryText, changeEntryText] = useState(props.entryText);

  const onChange = (e) => {
    changeEntryText(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.addTodo(entryText);
    changeEntryText('');
  };

  return (
    <form onSubmit={submitForm}>
      <input type='text' name='item' value={entryText} onChange={onChange} />
      <button>Add</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
  };
};

export default connect(null, mapDispatchToProps)(AddForm);
