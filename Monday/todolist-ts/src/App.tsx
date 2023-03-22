import React, {useState} from 'react';
import './App.css';
import {ToDoList} from "./ToDoList";

function App() {
    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS", isDone: true},
        {id: 4, title: "React", isDone: false},
    ]);
    const removeTask = (id: number) => {
        let tasksForTodolist = tasks.filter(el=>el.id !== id)
        setTasks(tasksForTodolist)
    }
    return (
        <div className="App">
            <ToDoList
                title = {"What to learn"}
                tasks = {tasks}
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;


//Todolist 01

// import React from 'react';
// import './App.css';
// import {ToDoList} from "./ToDoList";
//
// function App() {
//     let tasks = [
//         {id: 1, title: "HTML", isDone: true},
//         {id: 2, title: "CSS", isDone: true},
//         {id: 3, title: "JS", isDone: true},
//         {id: 4, title: "React", isDone: false},
//     ]
//     let movies = [
//         {id: 1, title: "Avatar", isDone: true},
//         {id: 2, title: "Titanic", isDone: true},
//         {id: 3, title: "Insidious", isDone: false},
//         {id: 4, title: "Terminator 2", isDone: true},
//     ]
//     return (
//         <div className="App">
//             <ToDoList
//                 title = {"What to learn"}
//                 tasks = {tasks}
//             />
//             <ToDoList
//                 title = {"James Cameron's movies"}
//                 tasks = {movies}
//             />
//         </div>
//     );
// }
//
// export default App;


// Todolist 02
// import React, {useState} from 'react';
// import './App.css';
// import {TasksType, ToDoList} from "./ToDoList";
//
// export type FilterValuesType = "all" | "completed" | "active"
//
// function App() {
//     let [tasks, setTasks] = useState<Array<TasksType>>([
//         {id: 1, title: "HTML", isDone: true},
//         {id: 2, title: "CSS", isDone: true},
//         {id: 3, title: "JS", isDone: true},
//         {id: 4, title: "React", isDone: false},
//     ])
//     let [filter, setFilter] = useState<FilterValuesType>("all");
//
//     const removeTask = (id: number) => {
//         let filteredTasks = tasks.filter(el=> el.id !== id)
//         setTasks(filteredTasks)
//     }
//
//     const changeFilter = (value: FilterValuesType)=>{
//         setFilter(value)
//     }
//
//     let tasksForTodolist = tasks;
//     if(filter === "completed"){
//         tasksForTodolist = tasks.filter(el => el.isDone)
//     }
//     if(filter === "active"){
//         tasksForTodolist = tasks.filter(el => !el.isDone)
//     }
//
//     return (
//         <div className="App">
//             <ToDoList
//                 title = {"What to learn"}
//                 tasks = {tasksForTodolist}
//                 removeTask={removeTask}
//                 changeFilter={changeFilter}
//             />
//         </div>
//     );
// }
//
// export default App;