import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo</h1>
      </header>
      <section>
        <TodoList />
      </section>
    </div>
  );
}

export default App;
