import React, { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAddTodo = (e: React.FormEvent, formData: ITodo): void => {
    formData._id = uuidv4();
    setTodos([...todos, formData]);
  };

  const handleDeleteTodo = (_id: string): void => {
    setTodos(todos.filter((t) => t._id !== _id));
  };

  return (
    <main className="App">
      <h1>My Todos</h1>
      <AddTodo addTodo={handleAddTodo} />
      {todos.map((todo: ITodo) => (
        <TodoItem key={todo._id} deleteTodo={handleDeleteTodo} todo={todo} />
      ))}
    </main>
  );
}

export default App;
