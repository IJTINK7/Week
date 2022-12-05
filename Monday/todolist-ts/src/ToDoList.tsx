import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./Button";

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
    addTask: (task:string)=> void
}



export function ToDoList(props: PropsType) {
    let [inputValue, setInputValue] = useState('');
    const onChangeInputHandler =(event:ChangeEvent<HTMLInputElement>)=>{
        setInputValue(event.currentTarget.value);
    }
    const addTaskHandler =()=>{
        props.addTask(inputValue);
        setInputValue('')
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.ctrlKey && event.charCode === 13){
            addTaskHandler()
        }
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={inputValue} onChange={onChangeInputHandler} onKeyPress={onKeyPressHandler}/>
            <Button name={"+"} callBack={addTaskHandler}/>
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <Button name={"x"} callBack={() => {props.removeTask(t.id)}}/>
                </li>)
            }
        </ul>
        <div>
            <Button name={"All"} callBack={() => {props.changeFilter("all")}}/>
            <Button name={"Active"} callBack={() => {props.changeFilter("active")}}/>
            <Button name={"Completed"} callBack={() => {props.changeFilter("completed")}}/>
        </div>
    </div>
}
