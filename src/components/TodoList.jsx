import React, { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

const TodoList = () => {
  const [todoValue, setTodoValue] = useState("");

  const { todos, addTodo, deleteTodo, completeTodo } = useTodoStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoValue);
    setTodoValue("");
  };

  return (
    <div>
      <h3 style={{ color: "white", fontWeight: "bold" }}>Todo App</h3>

      <form onSubmit={handleSubmit}>
        <input
          style={{ marginRight: "10px" }}
          type="text"
          id="new-todo"
          name="newTodo"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul style={{ color: "white", fontWeight: "bold" }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "unset",
              }}
            >
              {todo.text}{" "}
            </span>
            {!todo.isCompleted ? (
              <button
                style={{ marginRight: "10px" }}
                onClick={() => completeTodo(todo.id)}
              >
                ✔️
              </button>
            ) : null}
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
