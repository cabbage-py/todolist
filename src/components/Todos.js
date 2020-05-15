import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const Todos = ({ todos, toggleTodo, removeTodo, editTodo }) => {
  return todos.map((todo) => (
    <TodoItem
      todo={todo}
      toggleTodo={() => toggleTodo(todo.id)}
      removeTodo={() => removeTodo(todo.id)}
      editTodo={editTodo}
    />
  ));
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ),
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default connect()(Todos);
