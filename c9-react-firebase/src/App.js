import React, { useState, useEffect } from 'react';
import db from './db';

// Utility function
function onSnapShotFunction(snapshot, setTodos) {
  let changes = snapshot.docChanges();
  changes.forEach((change) => {
    //console.log(change.type);
    //console.log(change.doc.data());
    let data = change.doc.data();
    const id = change.doc.id;
    const timestamp = data.timestamp.toDate();
    data.id = id;
    data.timestamp = timestamp;
    if (change.type === 'added') {
      setTodos((prev) => [...prev, data]);
    } else if (change.type === 'removed') {
      setTodos((prev) => prev.filter((el) => (el.id !== id ? true : false)));
    } else if (change.type === 'modified') {
      setTodos((prev) => {
        const dataFiltered = prev.filter((el) => (el.id !== id ? true : false));
        return [...dataFiltered, data];
      });
    }
  });
}

// Main function
function App() {
  // State variables
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  useEffect(() => {
    const unsubscribe = db
      .collection('todos')
      .onSnapshot((snapshot) => onSnapShotFunction(snapshot, setTodos));
    return () => unsubscribe();
  }, []);

  function handleInputChange(event) {
    setTodo(event.target.value);
  }

  function addTodos() {
    if (todo) {
      const data = { title: todo, timestamp: new Date(), completed: false };
      db.collection('todos').add(data);
      setTodo('');
    }
  }

  function deleteTodos(id) {
    db.collection('todos').doc(id).delete();
  }

  // Sort Array
  const todosSorted = todos.sort((a, b) => a.timestamp - b.timestamp);

  console.log(todos);
  return (
    <div className='App'>
      <h1>Todos</h1>
      <input type='text' value={todo} onChange={handleInputChange} />
      <button onClick={addTodos}>Add</button>
      <ul>
        {todosSorted.map((todo) => (
          <li key={todo.id}>
            {todo.title} <span onClick={() => deleteTodos(todo.id)}>X</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
