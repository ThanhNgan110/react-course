import React from 'react'

function initializeTodo() {
  console.log('initializeTodo')
  return {
    title: 'tony'
  }
}

function StateHook() {
  const [todo] = React.useState(initializeTodo)
  const [count, setCount] = React.useState(0);

  function incrementCount() {
    // setCount(count + 1) // 0 + 1 = 1
    // setCount(count + 1) // 0 + 1
   
    // setState có callback function. Syntax: arrow function
    setCount(prevState => prevState + 1)
    setCount(prevState => prevState + 1)
    setCount(prevState => prevState + 1)
    setCount(prevState => prevState + 1)
  }

  console.log('state hook', todo)
  return (
    <div>
      <h1>StateHook</h1>
      Count: {count}<br />
      <button type="button" onClick={incrementCount}>Update Count</button>
    </div>
  )
}

export default StateHook