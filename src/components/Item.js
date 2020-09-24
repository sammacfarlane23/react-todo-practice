import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/todos';

const Item = (props) => {
  const onRemoveClick = () => {
    props.removeTodo(props.todo.id);
  };

  return (
    <div
      className='card col-12 p-0 my-3'
      style={{ border: 'none', background: '#eee' }}
    >
      <div className='card-body py-1'>
        <div className='row d-flex justify-content-between'>
          <p className='font-weight-bold col-8'>{props.todo.text}</p>
          <button onClick={onRemoveClick} className='btn btn-danger m-2'>
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
