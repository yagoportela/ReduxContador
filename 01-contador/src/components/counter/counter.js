import React from 'react' 


const Counter = ({counter, decrement, increment, removeCounter}) => (
    <div>
        <button onClick={removeCounter}>x</button>
        <h1>{counter}</h1>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
    </div>
)

export default Counter;