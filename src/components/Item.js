import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/todos';

const Item = (props) => {
  const onRemoveClick = () => {
    props.removeTodo(props.todo.id);
  };

  return (
    <div className='card col-sm-10 col-10 p-1 my-3 item'>
      <div className='card-body py-1'>
        <div className='row d-flex justify-content-between align-items-center'>
          <label className='checkbox-container col-2'>
            <input type='checkbox' />
            <span className='checkmark'></span>
          </label>
          <p className='font-weight-bold col-6'>{props.todo.text}</p>
          <button onClick={onRemoveClick} className='btn btn-danger'>
            Delete
          </button>
        </div>
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
