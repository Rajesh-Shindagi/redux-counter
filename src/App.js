import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import{increment, decrement} from './actions/index'


function App() {
const counter = useSelector(state=>state.counter);
const isLogged = useSelector(state=>state.isLogged);
const dispatch= useDispatch();

  return (
    <div className="App"  >
     <h1>Hello!</h1>
     <h1>Counter: {counter}</h1>

     {/*<button onClick={()=> dispatch(increment())}>+</button>
     <button onClick={()=> dispatch(decrement())}>-</button>
     this is to increase the counter by 1 */}

     <button onClick={()=> dispatch(increment(5))}>+5</button>
     <button onClick={()=> dispatch(decrement(5))}>-5</button>

    {isLogged ? <h3>Valable information!!!</h3>:''}


    </div>
  );
}

export default App;
