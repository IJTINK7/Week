import React from 'react';
import {DataType} from "../App";

type PropsType = {
	data: DataType
}

export const Tasks = (props: PropsType) => {
	return (
		<div>
			<div>{props.data.title}</div>
			<div>{props.data.tasks[1].title}</div>
			<div>{props.data.students[14]}</div>
		</div>

	);
}