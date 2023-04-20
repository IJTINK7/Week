import React, {useState} from 'react';

type PropsType={
	title: string
}
export const EditableSpan = (props:PropsType) => {
	const [edit, setEdit] = useState(false);
	const editTagHandler = () => {
		setEdit(!edit)
	}
	const editTagHandler1 = () => {
		setEdit(false)
	}
	return (
		edit
		?<input type="text" value={props.title} onBlur={editTagHandler1} autoFocus onChange={editTagHandler}/>
		:<span onDoubleClick={editTagHandler}>{props.title}</span>
	);
};