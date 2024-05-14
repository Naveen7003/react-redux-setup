import React from 'react'
import { useSelector } from "react-redux";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    console.log(count)
  return (
    <div>{count}</div>
  )
}

export default Counter
