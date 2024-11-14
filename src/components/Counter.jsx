import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', padding: '20px', border: '1px solid black', width: '150px', margin: '20px auto' }}>
      <h1>Value: {value}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })} style={{ fontSize: '20px', margin: '5px' }}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })} style={{ fontSize: '20px', margin: '5px' }}>-</button>
    </div>
  );
}

export default Counter;
