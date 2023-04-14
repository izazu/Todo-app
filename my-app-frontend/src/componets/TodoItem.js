import React, { useState } from "react";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [title, setTitle] = useState(todo.title);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleUpdate = () => {
    // Perform a PATCH request to update the todo
    fetch(`http://localhost:9292/todos/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    })
      .then((response) => response.json())
      .then((data) => {
        updateTodo(data); // Pass the updated todo back to the parent component
      })
      .catch((error) => console.error("Error updating todo:", error));
  };

  const handleDelete = () => {
    // Perform a DELETE request to delete the todo
    fetch(`http://localhost:9292/todos/${todo.id}`, {
      method: "DELETE",
    })
      .then(() => {
        deleteTodo(todo.id); // Pass the todo ID back to the parent component for deletion
      })
      .catch((error) => console.error("Error deleting todo:", error));
  };

  return (
    <li>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
      />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
