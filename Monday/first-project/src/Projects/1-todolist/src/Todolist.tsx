import React from "react";

type ToDoListPropsType = {
	title: string;
	tasks: Array<TaskPropsType>;
}
type TaskPropsType ={
	id: number;
	title: string;
	isDone: boolean;
}
export const Todolist = (props: ToDoListPropsType) => {
	return (
		<div>
			<h3>{props.title}</h3>
			<div>
				<input/>
				<button>+</button>
			</div>
			<ul>
				{props.tasks.map((el)=>{
					debugger
					return(
						<li key={el.id}><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>)
				})}
			</ul>
			<div>
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>
		</div>
	);
}