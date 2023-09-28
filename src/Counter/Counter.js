import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../Slice/CounterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()
  return (
    <>
        <h1>COUNT Value : {count}</h1>
        <button onClick={() => dispatch(increment())} >Increment</button> 
        <button onClick={() => dispatch(decrement())} >Decrement</button> 
    </>
  )
}

export default Counter
