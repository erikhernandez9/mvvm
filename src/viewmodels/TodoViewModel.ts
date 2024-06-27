// src/viewmodels/TodoViewModel.ts
import { useState } from 'react';
import TodoItem from '../models/TodoItem';

const useTodoViewModel = () => {
  const [items, setItems] = useState<TodoItem[]>([]);

  const addItem = (description: string) => {
    if (description) {
      const newItem = new TodoItem(items.length + 1, description);
      setItems([...items, newItem]);
    }
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const toggleItemCompletion = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    ));
  };

  return {
    items,
    addItem,
    removeItem,
    toggleItemCompletion,
  };
};

export default useTodoViewModel;
