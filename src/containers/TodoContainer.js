import { connect } from "react-redux";
import Todos from "../components/Todos";
import { toggleComplete, removeTodo, toggleEdit } from "../actions/actions";

const mapStateToProps = (state) => ({
  todos: state
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleComplete(id)),
  removeTodo: (id) => dispatch(removeTodo(id)),
  toggleEdit: (id) => dispatch(toggleEdit(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
