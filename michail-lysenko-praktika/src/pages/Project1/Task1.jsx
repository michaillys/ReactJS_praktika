import React, { useState } from "react";
import TaskList from "./Task1/TaskList";
import TaskForm from "./Task1/TaskForm";

function Task1() {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskText) => {
        if (!taskText.trim()) return; // Neleidžiame tuščių įrašų
        const newTask = { id: Date.now(), text: taskText, completed: false };
        setTasks([...tasks, newTask]);
    };

    const toggleTask = (taskId) => {
        setTasks(
            tasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div className="container text-center mt-5">
            <h1 className="mb-4">Užduotis 1</h1>
            <h2 className="mb-4">Užduočių sąrašas</h2>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        </div>
    );
}

export default Task1;