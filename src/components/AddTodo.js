import React, { Component } from "react";

export class AddTodo extends Component {

  render() {
    return (
      <form>
        <input placeholder="Add Todo"/>
        <button>Submit</button>
      </form>
    );
  }
}

export default AddTodo;
