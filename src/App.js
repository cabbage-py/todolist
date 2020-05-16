import React from 'react';
import './App.css';
import AddTodo from "./components/AddTodo";
import TodoContainer from "./containers/TodoContainer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do List</h1>
        <div className="App-wrapper">
          <AddTodo/>
          <TodoContainer/>
        </div>
      </header>
    </div>
  );
}

export default App;
