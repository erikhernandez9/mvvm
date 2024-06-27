// src/App.tsx
import React from 'react';
import TodoView from './views/TodoView';
import useTodoViewModel from './viewmodels/TodoViewModel';

const App: React.FC = () => {
  const todoViewModel = useTodoViewModel();

  return (
    <div className="App">
      <h1 className="text-2xl font-bold mb-4">ToDo List</h1>
      <TodoView
        items={todoViewModel.items}
        addItem={todoViewModel.addItem}
        removeItem={todoViewModel.removeItem}
        toggleItemCompletion={todoViewModel.toggleItemCompletion}
      />
    </div>
  );
};

export default App;
