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
		setTasks (tasks.filter(el=>el.id!==taskId));
	}

	const filterTasksFunction =(statusValue:string)=>{
		console.log(statusValue)
	}

	let [count, setCount] = useState(1);
	const onClickHandler = () => {
		setCount(count + 1);
	}
	return (
		<div className="App">
			<ToDoList title={"What to learn"} list={tasks} removeTask={removeTaskFunction} filterTasks={filterTasksFunction} />
			<div>
				<p>Вы кликнули {count} раз(а)</p>
				<button onClick={onClickHandler}>Нажми на меня</button>
			</div>
		</div>
	);
}

export default App;
