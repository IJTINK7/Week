import React, {useState} from 'react';
import './App.css';
import {TasksType, ToDoList} from "./ToDoList";
import {v1} from "uuid";

export type FilterValuesType = "all" | "completed" | "active"
type TodolistType={
	id: string;
	title: string;
	filter: FilterValuesType;
}

function App() {
	let [tasks, setTasks] = useState<Array<TasksType>>([
		{id: v1(), title: "HTML", isDone: true},
		{id: v1(), title: "CSS", isDone: true},
		{id: v1(), title: "JS", isDone: true},
		{id: v1(), title: "React", isDone: false},
	])
	let [filter, setFilter] = useState<FilterValuesType>("all");

	const removeTask = (id: string) => {
		let filteredTasks = tasks.filter(el => el.id !== id)
		setTasks(filteredTasks)
	}

	const changeFilter = (value: FilterValuesType) => {
		setFilter(value)
	}

	const addTask = (newTaskTitle: string) => {
		let newTask = {id: v1(), title: newTaskTitle, isDone: false}
		let newTasks = [newTask, ...tasks]
		setTasks(newTasks)
	}
	const changeTaskStatus = (taskId: string, isDone: boolean) => {
		let task = tasks.find(el => el.id === taskId)
		if (task) {
			task.isDone = isDone;
		}
		setTasks([...tasks])
	}

	let tasksForTodolist = tasks;
	if (filter === "completed") {
		tasksForTodolist = tasks.filter(el => el.isDone)
	}
	if (filter === "active") {
		tasksForTodolist = tasks.filter(el => !el.isDone)
	}
	let todolists:Array<TodolistType> = [
		{id: v1(), title: "What to learn", filter: "active"},
		{id: v1(), title: "What to buy", filter: "completed"}
	]

	return (
		<div className="App">
			{
				todolists.map(el=>{
					return <ToDoList
						title={el.title}
						tasks={tasksForTodolist}
						removeTask={removeTask}
						changeFilter={changeFilter}
						addTask={addTask}
						changeTaskStatus={changeTaskStatus}
						filter={el.filter}
					/>
				})
			}
		</div>
	);
}

export default App;


// Todolist 01
//
// import React from 'react';
// import './App.css';
// import {ToDoList} from "./ToDoList";
//
// function App() {
//     let tasks = [
//         {id: 1, title: "HTML", isDone: true},
//         {id: 2, title: "CSS", isDone: true},
//         {id: 3, title: "JS", isDone: true},
//         {id: 4, title: "React", isDone: false},
//     ]
//     let movies = [
//         {id: 1, title: "Avatar", isDone: true},
//         {id: 2, title: "Titanic", isDone: true},
//         {id: 3, title: "Insidious", isDone: false},
//         {id: 4, title: "Terminator 2", isDone: true},
//     ]
//     return (
//         <div className="App">
//             <ToDoList
//                 title = {"What to learn"}
//                 tasks = {tasks}
//             />
//             <ToDoList
//                 title = {"James Cameron's movies"}
//                 tasks = {movies}
//             />
//         </div>
//     );
// }
//
// export default App;


// Todolist 02
// import React, {useState} from 'react';
// import './App.css';
// import {TasksType, ToDoList} from "./ToDoList";
//
// export type FilterValuesType = "all" | "completed" | "active"
//
// function App() {
//     let [tasks, setTasks] = useState<Array<TasksType>>([
//         {id: 1, title: "HTML", isDone: true},
//         {id: 2, title: "CSS", isDone: true},
//         {id: 3, title: "JS", isDone: true},
//         {id: 4, title: "React", isDone: false},
//     ])
//     let [filter, setFilter] = useState<FilterValuesType>("all");
//
//     const removeTask = (id: number) => {
//         let filteredTasks = tasks.filter(el=> el.id !== id)
//         setTasks(filteredTasks)
//     }
//
//     const changeFilter = (value: FilterValuesType)=>{
//         setFilter(value)
//     }
//
//     let tasksForTodolist = tasks;
//     if(filter === "completed"){
//         tasksForTodolist = tasks.filter(el => el.isDone)
//     }
//     if(filter === "active"){
//         tasksForTodolist = tasks.filter(el => !el.isDone)
//     }
//
//     return (
//         <div className="App">
//             <ToDoList
//                 title = {"What to learn"}
//                 tasks = {tasksForTodolist}
//                 removeTask={removeTask}
//                 changeFilter={changeFilter}
//             />
//         </div>
//     );
// }
//
// export default App;

// Todolist 03

// import React, {useState} from 'react';
// import './App.css';
// import {TasksType, ToDoList} from "./ToDoList";
// import {v1} from "uuid";
//
// export type FilterValuesType = "all" | "completed" | "active"
//
// function App() {
// 	let [tasks, setTasks] = useState<Array<TasksType>>([
// 		{id: v1(), title: "HTML", isDone: true},
// 		{id: v1(), title: "CSS", isDone: true},
// 		{id: v1(), title: "JS", isDone: true},
// 		{id: v1(), title: "React", isDone: false},
// 	])
// 	let [filter, setFilter] = useState<FilterValuesType>("all");
//
// 	const removeTask = (id: string) => {
// 		let filteredTasks = tasks.filter(el => el.id !== id)
// 		setTasks(filteredTasks)
// 	}
//
// 	const changeFilter = (value: FilterValuesType) => {
// 		setFilter(value)
// 	}
//
// 	const addTask = (newTaskTitle: string) => {
// 		let newTask = {id: v1(), title: newTaskTitle, isDone: false}
// 		let newTasks = [newTask, ...tasks]
// 		setTasks(newTasks)
// 	}
//
// 	let tasksForTodolist = tasks;
// 	if (filter === "completed") {
// 		tasksForTodolist = tasks.filter(el => el.isDone)
// 	}
// 	if (filter === "active") {
// 		tasksForTodolist = tasks.filter(el => !el.isDone)
// 	}
//
// 	return (
// 		<div className="App">
// 			<ToDoList
// 				title={"What to learn"}
// 				tasks={tasksForTodolist}
// 				removeTask={removeTask}
// 				changeFilter={changeFilter}
// 				addTask={addTask}
// 			/>
// 		</div>
// 	);
// }
//
// export default App;

//Todolist 04
// import React, {useState} from 'react';
// import './App.css';
// import {TasksType, ToDoList} from "./ToDoList";
// import {v1} from "uuid";
//
// export type FilterValuesType = "all" | "completed" | "active"
//
// function App() {
// 	let [tasks, setTasks] = useState<Array<TasksType>>([
// 		{id: v1(), title: "HTML", isDone: true},
// 		{id: v1(), title: "CSS", isDone: true},
// 		{id: v1(), title: "JS", isDone: true},
// 		{id: v1(), title: "React", isDone: false},
// 	])
// 	let [filter, setFilter] = useState<FilterValuesType>("all");
//
// 	const removeTask = (id: string) => {
// 		let filteredTasks = tasks.filter(el => el.id !== id)
// 		setTasks(filteredTasks)
// 	}
//
// 	const changeFilter = (value: FilterValuesType) => {
// 		setFilter(value)
// 	}
//
// 	const addTask = (newTaskTitle: string) => {
// 		let newTask = {id: v1(), title: newTaskTitle, isDone: false}
// 		let newTasks = [newTask, ...tasks]
// 		setTasks(newTasks)
// 	}
// 	const changeTaskStatus = (taskId: string, isDone: boolean) => {
// 		let task = tasks.find(el => el.id === taskId)
// 		if (task) {
// 			task.isDone = isDone;
// 		}
// 		setTasks([...tasks])
// 	}
//
// 	let tasksForTodolist = tasks;
// 	if (filter === "completed") {
// 		tasksForTodolist = tasks.filter(el => el.isDone)
// 	}
// 	if (filter === "active") {
// 		tasksForTodolist = tasks.filter(el => !el.isDone)
// 	}
//
// 	return (
// 		<div className="App">
// 			<ToDoList
// 				title={"What to learn"}
// 				tasks={tasksForTodolist}
// 				removeTask={removeTask}
// 				changeFilter={changeFilter}
// 				addTask={addTask}
// 				changeTaskStatus={changeTaskStatus}
// 				filter={filter}
// 			/>
// 		</div>
// 	);
// }
//
// export default App;