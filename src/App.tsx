import React, {useState} from 'react';
import './App.css';
import ToDoList, {TaskType} from "./ToDoList";

export type FilterValueType = 'all' | 'completed' | 'active';

function App() {
    const todoListTitle_1: string = "What to learn?";


    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTMl & CSS", isDone: true},
        {id: 2, title: "ES6 &TS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false}

    ]);
    let [filter, setFilter] = useState<FilterValueType>('all');

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }

    function changeFilter(value: FilterValueType) {
        setFilter(value);
    }

    let getFilteredTaskForRender = tasks;

    if (filter === 'completed') {
        getFilteredTaskForRender = tasks.filter(t => t.isDone === true)
    }
    if (filter === 'active') {
        getFilteredTaskForRender = tasks.filter(t => t.isDone === false)
    }
    return (

            <div className="App">
                <ToDoList title={todoListTitle_1}
                          tasks={getFilteredTaskForRender}
                          removeTask={removeTask}
                          changeFilter={changeFilter}/>


            </div>

    );

}

export default App