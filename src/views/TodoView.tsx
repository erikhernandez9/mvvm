// src/views/TodoView.tsx
import React, { useState } from 'react';
import TodoItem from '../models/TodoItem';
import { Trash2, Plus } from 'lucide-react';

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
    <div className="w-full pt-44 flex justify-center items-center">
      <div className=''>
        <div className="bg-white border p-6 pt-4 rounded-2xl shadow-lg mb-4">
          <h1 className="text-2xl font-bold mb-4 text-center">ToDo List</h1>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border p-2 mr-2 rounded-lg"
            placeholder="Agregar una nueva tarea..."
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white p-2 px-6 rounded-lg"
          >
            Agregar
          </button>
        </div>
        <ul className='bg-white border p-6 pt-4 rounded-2xl shadow-lg space-y-2'>
          <h1 className="text-2xl font-bold mb-4">Tareas</h1>
          {items.map((item) => (
            <li key={item.id} className="flex items-center bg-slate-200 pl-2 rounded-lg hover:scale-105 duration-300">
              <span
                className={`flex-1 cursor-pointer ${item.isCompleted ? 'line-through' : ''}`}
                onClick={() => toggleItemCompletion(item.id)}
              >
                {item.description}
              </span>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white p-3 rounded-lg"
              >
                <Trash2
                  size={20}
                  className="text-white cursor-pointer"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default TodoView;
