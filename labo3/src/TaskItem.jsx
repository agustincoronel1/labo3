//component del item muestra la tarea con sus dos buttons
import React from "react";

function TaskItem({ task, taskCompletion, deleteTask }) {
  const { id, title, completed } = task;

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none', color: completed ? 'gray' : 'black' }}>
      {title}
      <button onClick={() => taskCompletion(id)}>Completada</button>
      <button onClick={() => deleteTask(id)}>Borrar</button>
    </li>
  );
}

export default TaskItem;