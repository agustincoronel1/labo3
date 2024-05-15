import { useState } from 'react';
import TaskItem from './TaskItem';
import AddTaskForm from './AddTaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Tarea 1', completed: false },
    { id: 2, title: 'Tarea 2', completed: false }
  ]);

  // añadir tarea
  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  // para marcar como completada
  const taskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // deleted
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <AddTaskForm addTask={addTask} />
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
    </div>
  );
}

export default App;