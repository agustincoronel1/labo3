//aca se muestran todas las tareas
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, taskCompletion, deleteTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          taskCompletion={taskCompletion} 
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}
//renderizamos un componente taskitem por cada tarea que tengamos con sus props
export default TaskList;