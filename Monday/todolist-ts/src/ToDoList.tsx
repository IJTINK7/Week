import React from "react";

export const ToDoList = () => {
	return (
		<div>
			<h3>What to learn</h3>
			<div>
				<input />
				<button>+</button>
			</div>
			<ul>
				<li><input type="checkbox" checked={true}/><span>HTML</span></li>
				<li><input type="checkbox" checked={true}/><span>CSS</span></li>
				<li><input type="checkbox" checked={true}/><span>JS</span></li>
				<li><input type="checkbox" checked={false}/><span>React</span></li>
			</ul>
			<div>
				<button>All</button>
				<button>Active</button>
				<button>Complete</button>
			</div>
		</div>
	);
}