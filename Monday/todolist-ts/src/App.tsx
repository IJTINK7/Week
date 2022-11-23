import React, {useState} from 'react';
import './App.css';
import {ToDoList} from './ToDoList';


export function App() {

	let [tasks, setTasks] = useState([
		{id: 1, checked: true, name: "HTML"},
		{id: 2, checked: true, name: "CSS"},
		{id: 3, checked: true, name: "JS"},
		{id: 4, checked: false, name: "React"},
		{id: 5, checked: false, name: "TS"},
	]);

	let filteredResult = tasks;
	let [content, setContent] = useState("All");

	const filterTasks = (valueKey: string) => {
		setContent(valueKey);
	}
	if (content === "Active") {
		filteredResult = tasks.filter(el => !el.checked);
	}
	if (content === "Completed") {
		filteredResult = tasks.filter(el => el.checked);
	}


	const removeTaskFunction = (taskId: number) => {
		setTasks(tasks.filter(el => el.id !== taskId));
	}

	return (
		<div className="App">
			<ToDoList title={"What to learn"}
					  list={filteredResult}
					  removeTask={removeTaskFunction}
					  filterTasks={filterTasks}	/>
		</div>
	);
}

export default App;
