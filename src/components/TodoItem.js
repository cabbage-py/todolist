import React, { Component } from "react";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
          />{" "}
          {title}
          <button style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

const title = "yes"


const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
