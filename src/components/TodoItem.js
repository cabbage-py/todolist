import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const TodoItem = ({ todo, toggleTodo, removeTodo, toggleEdit }) => {
  return (
    <div style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <input type="checkbox" className="checkbox" onClick={toggleTodo} />

      <p className="todo-text" onClick={toggleEdit}>
        {todo.title}
      </p>

      <button className="btn-delete" onClick={removeTodo}>
        Delete
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    showEdit: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
};

export default connect()(TodoItem);
