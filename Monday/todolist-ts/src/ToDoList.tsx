import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";

type PropsType = {
	id:string;
	title: string;
	tasks: Array<TaskType>;
	removeTask: (todolistId: string, taskId:string) => void;
	changeFilter: (todolistId: string, value: FilterValuesType) => void;
	addTask: (todolistId: string, newTaskTitle: string) => void;
	changeTaskStatus: (todolistId: string, taskId: string, isDone: boolean) => void;
	filter: FilterValuesType;
}
export type TaskType = {
	id: string;
	title: string;
	isDone: boolean;
}

export const ToDoList = (props: PropsType) => {
	let [newTaskTitle, setNewTaskTitle] = useState("")
	let [error, setError] = useState< null | string>(null)
	const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTaskTitle(e.currentTarget.value)
	}
	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		setError(null)
		if (e.ctrlKey && e.charCode === 13) {
			props.addTask(props.id, newTaskTitle)
			setNewTaskTitle("")
		}
	}
	const addTaskHandler = () => {
		if(newTaskTitle.trim() !== ""){
			props.addTask(props.id, newTaskTitle.trim())
			setNewTaskTitle("")
		}else{
			setError("Field is required")
		}
	}
	const onAllClickHandler = () => props.changeFilter(props.id, "all");
	const onCompletedClickHandler = () => props.changeFilter(props.id,"completed");
	const onActiveClickHandler = () => props.changeFilter(props.id,"active");

	return (
		<div>
			<h3>{props.title}</h3>
			<div>
				<input
					value={newTaskTitle}
					onChange={onNewTitleChangeHandler}
					onKeyPress={onKeyPressHandler}
					className={error ? "error" : ""}
				/>
				<button onClick={addTaskHandler}>+</button>
				{error && <div className={"error-message"}>{error}</div>}
			</div>
			<ul>
				{props.tasks.map(el => {
					const onRemoveHandler = () => props.removeTask(props.id, el.id)
					const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(props.id, el.id, e.currentTarget.checked);
					return <li key={el.id}
							   className={el.isDone ? "is-done" : ""}
					>
						<input
							type="checkbox"
							onChange={onChangeHandler}
							checked={el.isDone}/>
						<span>{el.title}</span>
						<button onClick={onRemoveHandler}>x
						</button>
					</li>
				})}
			</ul>
			<div>
				<button className={props.filter === 'all' ? "active-filter" : ""} onClick={onAllClickHandler}>All</button>
				<button className={props.filter === 'active' ? "active-filter" : ""} onClick={onActiveClickHandler}>Active</button>
				<button className={props.filter === 'completed' ? "active-filter" : ""} onClick={onCompletedClickHandler}>Complete</button>
			</div>
		</div>
	);
}

// Todolist 01
// import React from "react";
//
// type PropsType = {
// 	title: string;
// 	tasks: Array<TasksType>;
// }
// type TasksType ={
// 	id: number;
// 	title: string;
// 	isDone: boolean;
// }
//
// export const ToDoList = (props: PropsType) => {
// 	return (
// 		<div>
// 			<h3>{props.title}</h3>
// 			<div>
// 				<input />
// 				<button>+</button>
// 			</div>
// 			<ul>
// 				<li><input type="checkbox" checked={props.tasks[0].isDone}/><span>{props.tasks[0].title}</span></li>
// 				<li><input type="checkbox" checked={props.tasks[1].isDone}/><span>{props.tasks[1].title}</span></li>
// 				<li><input type="checkbox" checked={props.tasks[2].isDone}/><span>{props.tasks[2].title}</span></li>
// 				<li><input type="checkbox" checked={props.tasks[3].isDone}/><span>{props.tasks[3].title}</span></li>
// 			</ul>
// 			<div>
// 				<button>All</button>
// 				<button>Active</button>
// 				<button>Complete</button>
// 			</div>
// 		</div>
// 	);
// }

// Todolist 02
// import React from "react";
// import {FilterValuesType} from "./App";
//
// type PropsType = {
// 	title: string;
// 	tasks: Array<TasksType>;
// 	removeTask: Function;
// 	changeFilter: (value: FilterValuesType)=> void;
// }
// export type TasksType ={
// 	id: number;
// 	title: string;
// 	isDone: boolean;
// }
//
// export const ToDoList = (props: PropsType) => {
// 	return (
// 		<div>
// 			<h3>{props.title}</h3>
// 			<div>
// 				<input />
// 				<button>+</button>
// 			</div>
// 			<ul>
// 				{props.tasks.map(el=> <li><input type="checkbox" checked={el.isDone}/>
// 					<span>{el.title}</span>
// 					<button onClick={()=>{props.removeTask(el.id)}}>x</button>
// 				</li>)}
// 			</ul>
// 			<div>
// 				<button onClick={()=>{props.changeFilter('all')}}>All</button>
// 				<button onClick={()=>{props.changeFilter('active')}}>Active</button>
// 				<button onClick={()=>{props.changeFilter('completed')}}>Complete</button>
// 			</div>
// 		</div>
// 	);
// }

// Todolist 03

// import React, {ChangeEvent, KeyboardEvent, useState} from "react";
// import {FilterValuesType} from "./App";
//
// type PropsType = {
// 	title: string;
// 	tasks: Array<TasksType>;
// 	removeTask: (taskId: string) => void;
// 	changeFilter: (value: FilterValuesType) => void;
// 	addTask: (newTaskTitle: string) => void;
// }
// export type TasksType = {
// 	id: string;
// 	title: string;
// 	isDone: boolean;
// }
//
// export const ToDoList = (props: PropsType) => {
// 	let [newTaskTitle, setNewTaskTitle] = useState("")
// 	const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
// 		setNewTaskTitle(e.currentTarget.value)
// 	}
// 	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
// 		if (e.ctrlKey && e.charCode === 13) {
// 			props.addTask(newTaskTitle)
// 			setNewTaskTitle("")
// 		}
// 	}
// 	const addTaskHandler = () => {
// 		props.addTask(newTaskTitle)
// 		setNewTaskTitle("")
// 	}
// 	const onAllClickHandler = () => props.changeFilter("all");
// 	const onCompletedClickHandler = () => props.changeFilter("completed");
// 	const onActiveClickHandler = () => props.changeFilter("active");
// 	return (
// 		<div>
// 			<h3>{props.title}</h3>
// 			<div>
// 				<input
// 					value={newTaskTitle}
// 					onChange={onNewTitleChangeHandler}
// 					onKeyPress={onKeyPressHandler}
// 				/>
// 				<button onClick={addTaskHandler}>+</button>
// 			</div>
// 			<ul>
// 				{props.tasks.map(el => {
// 					const onRemoveHandler = () => props.removeTask(el.id)
// 					return <li key={el.id}><input type="checkbox" checked={el.isDone}/>
// 						<span>{el.title}</span>
// 						<button onClick={onRemoveHandler}>x
// 						</button>
// 					</li>})}
// 			</ul>
// 			<div>
// 				<button onClick={onAllClickHandler}>All
// 				</button>
// 				<button onClick={onActiveClickHandler}>Active
// 				</button>
// 				<button onClick={onCompletedClickHandler}>Complete
// 				</button>
// 			</div>
// 		</div>
// 	);
// }

//Todolist 04
// import React, {ChangeEvent, KeyboardEvent, useState} from "react";
// import {FilterValuesType} from "./App";
//
// type PropsType = {
// 	title: string;
// 	tasks: Array<TasksType>;
// 	removeTask: (taskId: string) => void;
// 	changeFilter: (value: FilterValuesType) => void;
// 	addTask: (newTaskTitle: string) => void;
// 	changeTaskStatus: (taskId: string, isDone: boolean) => void;
// 	filter: FilterValuesType;
// }
// export type TasksType = {
// 	id: string;
// 	title: string;
// 	isDone: boolean;
// }
//
// export const ToDoList = (props: PropsType) => {
// 	let [newTaskTitle, setNewTaskTitle] = useState("")
// 	let [error, setError] = useState< null | string>(null)
// 	const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
// 		setNewTaskTitle(e.currentTarget.value)
// 	}
// 	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
// 		setError(null)
// 		if (e.ctrlKey && e.charCode === 13) {
// 			props.addTask(newTaskTitle)
// 			setNewTaskTitle("")
// 		}
// 	}
// 	const addTaskHandler = () => {
// 		if(newTaskTitle.trim() !== ""){
// 			props.addTask(newTaskTitle.trim())
// 			setNewTaskTitle("")
// 		}else{
// 			setError("Field is required")
// 		}
// 	}
// 	const onAllClickHandler = () => props.changeFilter("all");
// 	const onCompletedClickHandler = () => props.changeFilter("completed");
// 	const onActiveClickHandler = () => props.changeFilter("active");
//
// 	return (
// 		<div>
// 			<h3>{props.title}</h3>
// 			<div>
// 				<input
// 					value={newTaskTitle}
// 					onChange={onNewTitleChangeHandler}
// 					onKeyPress={onKeyPressHandler}
// 					className={error ? "error" : ""}
// 				/>
// 				<button onClick={addTaskHandler}>+</button>
// 				{error && <div className={"error-message"}>{error}</div>}
// 			</div>
// 			<ul>
// 				{props.tasks.map(el => {
// 					const onRemoveHandler = () => props.removeTask(el.id)
// 					const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(el.id, e.currentTarget.checked);
// 					return <li key={el.id}
// 							   className={el.isDone ? "is-done" : ""}
// 					>
// 						<input
// 							type="checkbox"
// 							onChange={onChangeHandler}
// 							checked={el.isDone}/>
// 						<span>{el.title}</span>
// 						<button onClick={onRemoveHandler}>x
// 						</button>
// 					</li>
// 				})}
// 			</ul>
// 			<div>
// 				<button className={props.filter === 'all' ? "active-filter" : ""} onClick={onAllClickHandler}>All</button>
// 				<button className={props.filter === 'active' ? "active-filter" : ""} onClick={onActiveClickHandler}>Active</button>
// 				<button className={props.filter === 'completed' ? "active-filter" : ""} onClick={onCompletedClickHandler}>Complete</button>
// 			</div>
// 		</div>
// 	);
// }