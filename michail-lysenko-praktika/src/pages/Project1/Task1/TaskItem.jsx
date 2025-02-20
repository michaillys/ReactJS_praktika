import React from "react";

function TaskItem({ task, toggleTask, deleteTask }) {
    return (
        <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", textDecoration: task.completed ? "line-through" : "none" }}>
            <span style={{ textAlign: "center", width: "90%" }}><p>{task.text}</p></span>
            <div>
                <button onClick={() => toggleTask(task.id)}>
                    {task.completed ? "Atžymėti" : "Atlikta"}
                </button>
                <button onClick={() => deleteTask(task.id)}>Ištrinti</button>
            </div>
        </li>
    );
}

export default TaskItem;
