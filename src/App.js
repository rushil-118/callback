import logo from './logo.svg';
import './App.css';
import React, { useState, useCallback } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const incrementCount = useCallback(() => setCount(count+1),[count]);

  return (
    <div className="App">
      <hr />
      <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}></input>
      <p>Input text - {input}</p>
      <button onClick={incrementCount}>increment</button>
      <h3>Count : {count}</h3>
      <hr />
      <ChildComponent count={count} onClick={incrementCount} />
    </div>
  );
}

const ChildComponent = React.memo(function({count, onClick}){
  console.log("the child is rerendering");
  return(
    <div>
      <h2>This is a child component.</h2>
      <button onClick={onClick}>increment</button>
      <h4>Count : {count}</h4>
    </div>
  )
})

export default App;
