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


	let [content, setContent] = useState("All");

	const filterTasks = (valueKey: string) => {
		setContent(valueKey);
		activateFilter();
	}

	const activateFilter =()=>{
		let filteredTasks = tasks;
		if (content === "Active") {
			filteredTasks = tasks.filter(el => !el.checked);
		}
		if (content === "Completed") {
			filteredTasks = tasks.filter(el => el.checked);
		}
		return filteredTasks;
	}

	const removeTaskFunction = (taskId: number) => {
		setTasks(tasks.filter(el => el.id !== taskId));
	}

	return (
		<div className="App">
			<ToDoList title={"What to learn"}
					  list={activateFilter()}
					  removeTask={removeTaskFunction}
					  filterTasks={filterTasks}	/>
		</div>
	);
}

export default App;
