import React from 'react';
import './App.css';
import {ToDoList} from './ToDoList';


export function App() {
	let tasks = [
		{id: 1, checked: true, name: "HTML"},
		{id: 2, checked: true, name: "CSS"},
		{id: 3, checked: true, name: "JS"},
		{id: 4, checked: false, name: "React"},
		{id: 5, checked: false, name: "TS"},
	];
	let movies = [
		{id: 1, checked: true, name: "Titanic"},
		{id: 2, checked: true, name: "Avatar"},
		{id: 3, checked: false, name: "Avengers"},
		{id: 4, checked: false, name: "Aviator"},
	];
	let songs = [
		{id: 1, checked: false, name: "Hurt"},
		{id: 2, checked: false, name: "Pretty Woman"},
		{id: 3, checked: true, name: "She's a rebel"},
		{id: 4, checked: true, name: "Holiday"},
	];

	return (
		<div className="App">
			<ToDoList title={"What to learn"} list={tasks} />
			<ToDoList title={"James Cameron Movies"} list={movies}/>
			<ToDoList title={"Green Day Songs"} list={songs}/>
		</div>
	);
}

export default App;
