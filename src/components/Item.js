import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/todos';

const Item = (props) => {
  const onRemoveClick = () => {
    props.removeTodo(props.todo.id);
  };

  return (
    <div className='card col-sm-10 item'>
      <div className='card-body row d-flex justify-content-between'>
        <label className='checkbox-container'>
          <input type='checkbox' name='todo-checkbox' />
          <span className='checkmark'></span>
        </label>
        <p className='font-weight-bold'>{props.todo.text}</p>
        <button onClick={onRemoveClick} className='btn btn-danger'>
          Delete
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (id) => dispatch(removeTodo(id)),
  };
};

export default connect(null, mapDispatchToProps)(Item);
