import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function handleInput(event) {
    setTodo(event.target.value);
  }

  function addTodos() {
    // let todoTemp = todos.slice(0);
    // todoTemp.push(event.target.value);
    // setTodos(todoTemp);
    setTodos([...todos, todo]);
    setTodo("");
  }

  function handleDelete(item) {
    let todoTemp = todos.filter((el) => el !== item);
    setTodos(todoTemp);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" value={todo} onChange={handleInput}></input>
      <button onClick={addTodos}>Add</button>
      <ul>
        {todos.map((item) => (
          <li key={item}>
            {item} <span onClick={() => handleDelete(item)}>[X]</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
