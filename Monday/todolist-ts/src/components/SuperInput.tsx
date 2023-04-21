import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button} from "@mui/material";

type PropsType = {
	callBack: (title: string) => void
}
export const SuperInput = (props: PropsType) => {
	let [newTaskTitle, setNewTaskTitle] = useState("")
	let [error, setError] = useState<null | string>(null)

	const addTaskHandler = () => {
		if (newTaskTitle.trim() !== "") {
			props.callBack(newTaskTitle.trim())
			setNewTaskTitle("")
		} else {
			setError("Field is required")
		}
	}
	const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTaskTitle(e.currentTarget.value)
	}
	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		setError(null)
		if (e.ctrlKey && e.charCode === 13) {
			props.callBack(newTaskTitle)
			setNewTaskTitle("")
		}
	}
	return (
		<div>
			<input
				value={newTaskTitle}
				onChange={onNewTitleChangeHandler}
				onKeyPress={onKeyPressHandler}
				className={error ? "error" : ""}
			/>
			<Button variant="contained" onClick={addTaskHandler}>+</Button>
			{error && <div className={"error-message"}>{error}</div>}
		</div>
	);
};