import React, { Component } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { increament, decreament } from './perform';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.loggedin);
  const dispatch = useDispatch();
 

  return (
    <div classname="App">
      <h1>counter{ counter}</h1>
      <button onClick={() => dispatch(increament())}>+</button>
      <button onClick={() => dispatch(decreament())}>-</button>
      console.log(a);
          </div>
    
  )
  
}





export default App;
