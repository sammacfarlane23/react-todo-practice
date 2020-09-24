import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';
import uuid from 'react-uuid';

const AddForm = (props) => {
  const [entryText, changeEntryText] = useState('');

  const onChange = (e) => {
    changeEntryText(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (entryText !== '') {
      props.addTodo({
        id: uuid(),
        text: entryText,
      });
    }
    changeEntryText('');
  };

  return (
    <form onSubmit={submitForm}>
      <div className='col d-flex flex-column align-items-center justify-content-center m-0'>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            name='item'
            value={entryText}
            onChange={onChange}
          />
        </div>
        <button className='btn btn-primary ml-2' style={{ height: '38px' }}>
          Add
        </button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
  };
};

export default connect(null, mapDispatchToProps)(AddForm);
