import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";

type PropsType = {
	title: string;
	tasks: Array<TasksType>;
	removeTask: (taskId: string) => void;
	changeFilter: (value: FilterValuesType) => void;
	addTask: (newTaskTitle: string) => void;
}
export type TasksType = {
	id: string;
	title: string;
	isDone: boolean;
}

export const ToDoList = (props: PropsType) => {
	let [newTaskTitle, setNewTaskTitle] = useState("")
	const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTaskTitle(e.currentTarget.value)
	}
	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.ctrlKey && e.charCode === 13) {
			props.addTask(newTaskTitle)
			setNewTaskTitle("")
		}
	}
	const addTask = () => {
		props.addTask(newTaskTitle)
		setNewTaskTitle("")
	}
	return (
		<div>
			<h3>{props.title}</h3>
			<div>
				<input
					value={newTaskTitle}
					onChange={onNewTitleChangeHandler}
					onKeyPress={onKeyPressHandler}
				/>
				<button onClick={addTask}>+</button>
			</div>
			<ul>
				{props.tasks.map(el => <li key={el.id}><input type="checkbox" checked={el.isDone}/>
					<span>{el.title}</span>
					<button onClick={() => {
						props.removeTask(el.id)
					}}>x
					</button>
				</li>)}
			</ul>
			<div>
				<button onClick={() => {
					props.changeFilter('all')
				}}>All
				</button>
				<button onClick={() => {
					props.changeFilter('active')
				}}>Active
				</button>
				<button onClick={() => {
					props.changeFilter('completed')
				}}>Complete
				</button>
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