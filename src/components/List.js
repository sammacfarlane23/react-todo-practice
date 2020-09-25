import React from 'react';
import Item from './Item';
import { connect } from 'react-redux';

const List = (props) => {
  return props.todos.map((todo) => <Item key={todo.id} todo={todo} />);
};

const mapStateToProps = (state) => ({ todos: state.todos });

export default connect(mapStateToProps)(List);
