import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import style from "./Todolist.module.css"

type TaskType = {
	id: string
	title: string
	isDone: boolean
}

type PropsType = {
	title: string
	tasks: Array<TaskType>
	removeTask: (taskId: string) => void
	changeFilter: (value: FilterValuesType) => void
	addTask: (title: string) => void
	changeCheckBox:(taskId: string, eventValue: boolean)=> void
}

export function Todolist(props: PropsType) {

	const [title, setTitle] = useState("");
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [activeButton, setActiveButton] = useState('all');
	const addTask = () => {
		if(title.trim() === ''){
			setError(true)
			setErrorMessage("Title is required")
		}
		if (title.trim() !== '') {
			props.addTask(title.trim());
			setTitle("");

		}
	}

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setError(false)
		setErrorMessage("")
		setTitle(e.currentTarget.value)
	}

	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.charCode === 13) {
			addTask();
		}
	}

	const onAllClickHandler = () => {
		props.changeFilter("all");
		setActiveButton("all");
	}
	const onActiveClickHandler = () => {
		props.changeFilter("active");
		setActiveButton("active");
	}
	const onCompletedClickHandler = () => {
		props.changeFilter("completed");
		setActiveButton("completed");
	}

	return <div>
		<h3>{props.title}</h3>
		<div>
			<input className={error ? style.error : ''}
				   value={title}
				   onChange={ onChangeHandler }
				   onKeyPress={ onKeyPressHandler }
			/>
			<button onClick={addTask}>+</button>
			{ error && <div className={style.errorMessage}>{errorMessage}</div>}
		</div>
		<ul>
			{
				props.tasks.map(t => {

					const onClickHandler = () => props.removeTask(t.id)
					const onChangeCheckBoxHandler =(e: ChangeEvent<HTMLInputElement>)=>{
						props.changeCheckBox(t.id, e.currentTarget.checked)
					}

					return <li key={t.id}>
						<input type="checkbox" checked={t.isDone} onChange={onChangeCheckBoxHandler}/>
						<span>{t.title}</span>
						<button onClick={ onClickHandler }>x</button>
					</li>
				})
			}
		</ul>
		<div>
			<button className={activeButton === 'all' ? style.activeFilter: ''} onClick={ onAllClickHandler }>All</button>
			<button className={activeButton === 'active' ? style.activeFilter: ''} onClick={ onActiveClickHandler }>Active</button>
			<button className={activeButton === 'completed' ? style.activeFilter: ''} onClick={ onCompletedClickHandler }>Completed</button>
		</div>
	</div>
}