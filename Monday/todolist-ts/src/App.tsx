import React from 'react';
import './App.css';
import {ToDoList} from "./ToDoList";

function App() {
  return (
    <div className="App">
      <ToDoList title="What to learn"/>
      <ToDoList title="James Cameron's movies"/>
    </div>
  );
}

export default App;
