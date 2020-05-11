import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {

  render() {
    return this.props.todos.map((todo) => (
    <TodoItem/>
    ));
  }
}

export default Todos;
