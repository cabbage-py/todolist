import React from 'react';
import './App.css';
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do List</h1>
        <AddTodo/>
      </header>
    </div>
  );
}

export default App;
