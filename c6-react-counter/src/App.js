import React, { useState } from 'react';

function App() {
  let myHeader = 'Counter App';
  const [count, setCount] = useState(0);

  function clickFunction() {
    console.log('click');
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{myHeader}</h1>
      <p>{count}</p>
      <button onClick={clickFunction}>Add</button>
    </div>
  );
}

export default App;
