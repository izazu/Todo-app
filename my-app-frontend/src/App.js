import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Perform a GET request to fetch all todos
    fetch("http://localhost:9292/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]); // Add the new todo to the todos state
  };

  const updateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos); // Update the todos state with the updated todo
  };

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos); // Update the todos state by filtering out the deleted todo
  };

  return (
    <div>
      <h1>Todos</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

 



export default App;
