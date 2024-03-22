import { useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';

function reducer(state: number, action: { type: any }) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export default function SamplePage() {
  const [number, dispatch] = useReducer(reducer, 0);

  function onIncrease() {
    dispatch({ type: 'INCREMENT' });
  }

  function onDecrease() {
    dispatch({ type: 'DECREMENT' });
  }

  return (
    <div data-page="sample-page">
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <div>{number}</div>
    </div>
  );
}
