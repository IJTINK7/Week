import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

export const SuperInput = () => {
	let [newTaskTitle, setNewTaskTitle] = useState("")
	let [error, setError] = useState<null | string>(null)

	const addTaskHandler = () => {
		if (newTaskTitle.trim() !== "") {
			props.addTask(props.id, newTaskTitle.trim())
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
			props.addTask(props.id, newTaskTitle)
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
			<button onClick={addTaskHandler}>+</button>
			{error && <div className={"error-message"}>{error}</div>}
		</div>
	);
};