import React, {useState} from 'react';

type PropsType={
	title: string
}
export const EditableSpan = (props:PropsType) => {
	const [edit, setEdit] = useState(false);
	const editTagHandler = () => {
		setEdit(true)
	}
	return (
		edit
		?<input type="text" value={props.title}/>
		:<span onDoubleClick={editTagHandler}>{props.title}</span>
	);
};