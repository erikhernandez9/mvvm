// src/views/TodoView.tsx
import React, { useState } from 'react';
import TodoItem from '../models/TodoItem';

interface TodoViewProps {
  items: TodoItem[];
  addItem: (description: string) => void;
  removeItem: (id: number) => void;
  toggleItemCompletion: (id: number) => void;
}

const TodoView: React.FC<TodoViewProps> = ({ items, addItem, removeItem, toggleItemCompletion }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    addItem(newTask);
    setNewTask('');
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Add a new task"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Task
        </button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="flex items-center mb-2">
            <span
              className={`flex-1 cursor-pointer ${item.isCompleted ? 'line-through' : ''}`}
              onClick={() => toggleItemCompletion(item.id)}
            >
              {item.description}
            </span>
            <button
              onClick={() => removeItem(item.id)}
              className="bg-red-500 text-white p-2 rounded ml-2"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoView;
