import React from "react";
import {FilterValuesType} from "./App";

export type TitlePropsType = {
	title: string;
	list: Array<ListPropsType>;
	removeTask: (taskId: number) => void;
	filterTasks: (valueKey:FilterValuesType)=> void;
}

export type ListPropsType = {
	id: number;
	checked: boolean;
	name: string;
}

export const ToDoList = (props: TitlePropsType) => {


	return (
		<div>
			<h3>{props.title}</h3>
			<input/>
			<button>+</button>
			<ul>
				{props.list.map((el) => {
					return (
						<li key={el.id}>
							<button onClick={() => {
								props.removeTask(el.id)
							}}>x
							</button>
							<input type="checkbox" checked={el.checked}/>
							<span>{el.name}</span>
						</li>
					)
				})}
			</ul>
			<div>
				<button onClick={() => {props.filterTasks("All")}}>All</button>
				<button onClick={() => {props.filterTasks("Active")}}>Active</button>
				<button onClick={() => {props.filterTasks("Completed")}}>Completed</button>
			</div>
		</div>
	);
}