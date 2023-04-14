import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform a POST request to create a new todo
    fetch("http://localhost:9292/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    })
      .then((response) => response.json())
      .then((data) => {
        addTodo(data); // Pass the created todo back to the parent component
        setTitle(""); // Reset the input field
      })
      .catch((error) => console.error("Error creating todo:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter todo title"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
