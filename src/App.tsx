import React from 'react';
import './App.css';
import ToDoList, {TaskType} from "./ToDoList";


function App() {
    const todoListTitle_1: string ="What to learn?";
    const todoListTitle_2: string ="What to buy?";

    const tasks_1: Array<TaskType>=[
        {id:1, title:"HTMl & CSS", isDone:true},
        {id:2, title:"ES6 &TS", isDone:true},
        {id:3, title:"React", isDone:false}

    ]
    return (
        <div className="App">
            <ToDoList title={todoListTitle_1} tasks={tasks_1}/>
            {/*<ToDoList title={todoListTitle_2} tasks={""} />*/}

        </div>
    );
}

export default App;
