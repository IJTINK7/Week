import React, {ChangeEvent, useState} from 'react';

type PropsType={
	oldTitle: string
}
export const EditableSpan = (props:PropsType) => {
	const [newTitle, setNewTitle] = useState(props.oldTitle)
	const [edit, setEdit] = useState(false);
	const editTagHandler = () => {
		setEdit(!edit)
	}
	const editTagHandler1 = () => {
		setEdit(false)
	}
	const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
		setNewTitle(e.currentTarget.value)
	}
	return (
		edit
		?<input type="text" value={newTitle} onBlur={editTagHandler1} autoFocus onChange={onChangeHandler}/>
		:<span onDoubleClick={editTagHandler}>{props.oldTitle}</span>
	);
};