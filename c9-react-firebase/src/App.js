import React, { useState } from 'react';
import db from './db';

function clickFn1() {
  db.collection('users')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log(doc.data());
      });
    });
}

console.log(db);

function App() {
  return (
    <div className='App'>
      <button onClick={clickFn1}>Click Me</button>
    </div>
  );
}

export default App;
