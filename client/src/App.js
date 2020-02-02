import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo</h1>
      </header>
      <section>
        <TodoForm />
        <TodoList />
      </section>
    </div>
  );
}

export default App;
