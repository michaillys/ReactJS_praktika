import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask }) {
    return (
        <ul>
            {tasks.length === 0 ? (
                <p>Nėra užduočių!</p>
            ) : (
                tasks.map((task) => (
                    <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
                ))
            )}
        </ul>
    );
}

export default TaskList;

