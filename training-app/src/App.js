import './App.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';
import { textChange } from './redux/inputSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const message =useSelector((state) => state.text.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      ----
      <input type='text' onChange={(e) => dispatch(textChange(e.target.value))} />
      {message}
    </div>
  );
}

export default App;