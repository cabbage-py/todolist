import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

const Todos = ({ todos, toggleTodo, removeTodo, toggleEdit }) => {
  return todos.map((todo) => (
    <div className="Todo-border">
      <TodoItem
        todo={todo}
        toggleTodo={() => toggleTodo(todo.id)}
        removeTodo={() => removeTodo(todo.id)}
        toggleEdit={() => toggleEdit(todo.id)}
      />
      <EditTodo todo={todo} />
    </div>
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
  toggleEdit: PropTypes.func.isRequired,
};

export default connect()(Todos);
