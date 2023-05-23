import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type objType = {
    id: number
    title: string
    OS: string
    checked: boolean
}
function App() {
    const [wishes, setWishes] = useState<objType[]>([
        {id: 1, title: 'Samsung Galaxy S23', OS: "Android", checked: true},
        {id: 2, title: 'IPhone 13 ProMax', OS: "iOS", checked: true},
        {id: 3, title: 'Xiaomi 13', OS: "Android", checked: true},
        {id: 4, title: 'Huawei', OS: "Android", checked: false},
        {id: 5, title: 'Iphone 14', OS: "iOS", checked: false},
    ])

    const deleteTask= (taskId:number)  => {
        setWishes(wishes.filter(el=>el.id !== taskId ))
    }
    return (
    <div className="App">
       Рш
    </div>
  );
}

export default App;
