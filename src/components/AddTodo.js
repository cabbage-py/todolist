import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/actions";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        input.value = "";
      }}
    >
      <input placeholder="Add Todo Here" ref={(node) => (input = node)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default connect()(AddTodo);
