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

	const removeTaskFunction =(taskId:number)=>{
		setTasks(tasks.filter(el=>el.id!==taskId));
	}

	let filteredResult = tasks;

	let [valueKey, setValueKey] = useState("All");

	const filterTasksFunction=(statusValue:string)=>{
		setValueKey(statusValue);
	}
	if(valueKey === "Active"){
		filteredResult = tasks.filter(el=>el.checked);
	}
	if(valueKey === "Completed"){
		filteredResult = tasks.filter(el=>!el.checked);
	}

	let [count, setCount] = useState(1);
	const onClickHandler = () => {
		setCount(count + 1);
	}
	return (
		<div className="App">
			<ToDoList title={"What to learn"} list={filteredResult} removeTask={removeTaskFunction} filterTasks={filterTasksFunction} />
			<div>
				<p>Вы кликнули {count} раз(а)</p>
				<button onClick={onClickHandler}>Нажми на меня</button>
			</div>
		</div>
	);
}

export default App;
