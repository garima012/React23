import React, {useState}from 'react'

export default function Counter () {

  const [counter, setCounter] = useState(0);
  
  const incr = ()=>{
    setCounter(counter+1);

    console.log(counter);
  }

  
  const dec = ()=>{
    setCounter(counter-1);

    console.log(counter);
  }

  
  const mul = ()=>{
    setCounter(counter*2);

    console.log(counter);
  }
  return (
    <div>{Counter}
    <button onclick={incr}>+</button>
    <button onclick={dec}>-</button>
    <button onclick={mul}>*</button>
    </div>
  )
}
