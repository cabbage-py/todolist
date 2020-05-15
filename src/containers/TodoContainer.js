import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { toggleComplete, removeTodo, editTodo } from '../actions/actions'

const mapStateToProps = state => ({
  todos: state
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleComplete(id)),
  removeTodo: id => dispatch(removeTodo(id)),
  editTodo: editTodo
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)