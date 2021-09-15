import React, { useState, useEffect } from 'react';
import db from './db';

function onSnapShotFunction(snapshot, setTodos) {
  let changes = snapshot.docChanges();
  changes.forEach((change) => {
    //console.log(change.type);
    //console.log(change.doc.data());
    let data = change.doc.data();
    const id = change.doc.id;
    data.id = id;
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

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection('users')
      .onSnapshot((snapshot) => onSnapShotFunction(snapshot, setTodos));
    return () => unsubscribe();
  }, []);

  return (
    <div className='App'>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
