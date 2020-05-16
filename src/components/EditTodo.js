import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { editTodo } from "../actions/actions";

const EditTodo = ({ dispatch, todo }) => {
  let input;

  return (
    <form
      className="form-edit"
      style={{ display: todo.showEdit ? "block" : "none" }}
    >
      <input
        placeholder="Type new Todo here"
        ref={(node) => (input = node)}
      ></input>

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
        Edit Todo
      </button>
    </form>
  );
};

EditTodo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    showEdit: PropTypes.bool.isRequired,
  }).isRequired,
};

export default connect()(EditTodo);
