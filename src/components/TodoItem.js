import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const TodoItem = ({ dispatch, todo, toggleTodo, removeTodo, editTodo }) => {
  let input;
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <div className="Todo-border">
      <div style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        <input type="checkbox" className="checkbox" onClick={toggleTodo} />

        <p className="todo-text" onClick={() => setShowEditForm(!showEditForm)}>
          {todo.title}
        </p>

        <button className="btn-delete" onClick={removeTodo}>
          Delete
        </button>

        <form
          className="form-edit"
          style={{ display: showEditForm ? "block" : "none" }}
        >
          <input
            placeholder="Type new Todo here"
            ref={(node) => (input = node)}
          ></input>
          <button onClick={() => setShowEditForm(false)}>Cancel</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }
              dispatch(editTodo(todo.id, input.value));
              input.value = "";
            }}
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default connect()(TodoItem);
