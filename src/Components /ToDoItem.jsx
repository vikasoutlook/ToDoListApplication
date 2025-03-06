import React, { useState } from 'react';

function ToDoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.text}
        </div>
      )}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      {!isEditing && <button onClick={() => setIsEditing(true)}>Edit</button>}
    </div>
  );
}

export default ToDoItem;