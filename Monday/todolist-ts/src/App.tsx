import React from 'react';
import './App.css';
import {ToDoList} from "./ToDoList";

function App() {
    let tasks = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS", isDone: true},
        {id: 4, title: "React", isDone: false},
    ]
    let movies = [
        {id: 1, title: "Avatar", isDone: true},
        {id: 2, title: "Titanic", isDone: true},
        {id: 3, title: "Insidious", isDone: false},
        {id: 4, title: "Terminator 2", isDone: true},
    ]
  return (
    <div className="App">
      <ToDoList />
      <ToDoList />
    </div>
  );
}

export default App;
