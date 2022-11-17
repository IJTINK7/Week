import React, {useState} from 'react';
import './App.css';
import {ToDoList} from './ToDoList';


export function App() {
	// let tasks = [
	// 	{id: 1, checked: true, name: "HTML"},
	// 	{id: 2, checked: true, name: "CSS"},
	// 	{id: 3, checked: true, name: "JS"},
	// 	{id: 4, checked: false, name: "React"},
	// 	{id: 5, checked: false, name: "TS"},
	// ];
	let[tasks, setTasks] = useState([
		{id: 1, checked: true, name: "HTML"},
		{id: 2, checked: true, name: "CSS"},
		{id: 3, checked: true, name: "JS"},
		{id: 4, checked: false, name: "React"},
		{id: 5, checked: false, name: "TS"},
	])

	const removeTask =(taskId:number)=>{
		setTasks(tasks.filter(el => el.id !== taskId));
	}
	const [filterValueKey, setFilterValueKey] = useState("All")


	let filteredTasks = tasks;
	const filterTasks =(filterKey:string)=>{
		setFilterValueKey(filterKey)
	}
	if(filterValueKey === "Active"){
		filteredTasks = tasks.filter(el=>el.checked)
	}
	if(filterValueKey === "Completed"){
		filteredTasks = tasks.filter(el=>!el.checked)
	}



	return (
		<div className="App">
			<ToDoList title={"What to learn"} list={filteredTasks} removeTask={removeTask} filterTasks={filterTasks} />
		</div>
	);
}

export default App;
