import React, {ChangeEvent, useState} from 'react';

type PropsType={
	oldTitle: string
	callBack: (newTitle: string) => void;
}
export const EditableSpan = (props:PropsType) => {
	const [newTitle, setNewTitle] = useState(props.oldTitle)
	const [edit, setEdit] = useState(false);
	const editTagHandler = () => {
		setEdit(!edit)
		props.callBack(newTitle)
	}
	const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
		setNewTitle(e.currentTarget.value)
	}
	return (
		edit
		?<input type="text" value={newTitle} onBlur={editTagHandler} autoFocus onChange={onChangeHandler}/>
		:<span onDoubleClick={editTagHandler}>{props.oldTitle}</span>
	);
};