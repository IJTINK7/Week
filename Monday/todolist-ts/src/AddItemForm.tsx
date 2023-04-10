import React, {ChangeEvent, KeyboardEvent, useState} from "react";
//
// type AddItemFormPropsType = {
// 	addItem: (newTaskTitle: string) => void;
// }
// export const AddItemForm = (props: AddItemFormPropsType) => {
// 	let [newTaskTitle, setNewTaskTitle] = useState("")
// 	let [error, setError] = useState<null | string>(null)
// 	const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
// 		setNewTaskTitle(e.currentTarget.value)
// 	}
// 	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
// 		setError(null)
// 		if (e.ctrlKey && e.charCode === 13) {
// 			props.addItem(newTaskTitle)
// 			setNewTaskTitle("")
// 		}
// 	}
	const addTaskHandler = () => {
// 		if (newTaskTitle.trim() !== "") {
// 			props.addItem(newTaskTitle.trim())
// 			setNewTaskTitle("")
// 		} else {
// 			setError("Field is required")
// 		}
// 	}
	return (
		<div>Hi</div>
// 		<div>
// 			<input
// 				value={newTaskTitle}
// 				onChange={onNewTitleChangeHandler}
// 				onKeyPress={onKeyPressHandler}
// 				className={error ? "error" : ""}
// 			/>
// 			<button onClick={addTaskHandler}>+</button>
// 			{error && <div className={"error-message"}>{error}</div>}
// 		</div>
	);
}

// Todolist 06
// import React, {ChangeEvent, KeyboardEvent, useState} from "react";
//
// type AddItemFormPropsType = {
// 	addItem: (newTaskTitle: string) => void;
// }
// export const AddItemForm = (props: AddItemFormPropsType) => {
// 	let [newTaskTitle, setNewTaskTitle] = useState("")
// 	let [error, setError] = useState<null | string>(null)
// 	const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
// 		setNewTaskTitle(e.currentTarget.value)
// 	}
// 	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
// 		setError(null)
// 		if (e.ctrlKey && e.charCode === 13) {
// 			props.addItem(newTaskTitle)
// 			setNewTaskTitle("")
// 		}
// 	}
// const addTaskHandler = () => {
// 		if (newTaskTitle.trim() !== "") {
// 			props.addItem(newTaskTitle.trim())
// 			setNewTaskTitle("")
// 		} else {
// 			setError("Field is required")
// 		}
// 	}
// 	return (
// 		<div>Hi</div>
// 		<div>
// 			<input
// 				value={newTaskTitle}
// 				onChange={onNewTitleChangeHandler}
// 				onKeyPress={onKeyPressHandler}
// 				className={error ? "error" : ""}
// 			/>
// 			<button onClick={addTaskHandler}>+</button>
// 			{error && <div className={"error-message"}>{error}</div>}
// 		</div>
// 	);
// }