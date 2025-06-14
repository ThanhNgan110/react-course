import React from 'react'

/*
- first render: render UI with initial state
- re-render (next render); render UI with new state
*/
function State() {
  const [count, setCount] = React.useState(1); // number - compare value
  const [message, setMessage] = React.useState({
    text: 'Ngan',
    author: 'Tony',
    subject: 'Lorem lorem'
  }); // memory A

  function incremenet() {
    // setCount(count + 1)
    setCount(prevState => prevState + 1)
    // click lan 1: 2 -> prev state: 1, pending next state: 2 -> component re-render
    // click lan 2: -> prev state: 2, pending next state: 2 -> component not render
  }

  function updateMessage() {
    // message.text = 'Tony ' + Date.now(); // memory A
    // const newMessage = {
    //   ...message, // copy all properties
    //   text: 'Ngan'
    // }; // memory X
    // setMessage(newMessage); // prev state: memory A,  pending next state: memory B

    // updater function
    // syntax code: arrow function
    setMessage((prevState) => {
      return {
        ...prevState,
        text: 'Tony ' + Date.now()
      }
    })
  }

  console.log('State render: ', message)
  return (
    <div>
      <h1>State</h1>
      Count: {count} <br />
      <button type="button" onClick={incremenet}>Increment</button><br /><br />

      Message: {message.text} <br />
      <button type="button" onClick={updateMessage}>Update Message</button><br /><br />
    </div>
  )
}

export default State