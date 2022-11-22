import React from "react";

export type TitlePropsType = {
	title: string;
	list: Array<ListPropsType>;
	removeTask:()=>void
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
							<button onClick={()=>{props.removeTask()}}>x</button>
							<input type="checkbox" checked={el.checked}/>
							<span>{el.name}</span>
						</li>
					)
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