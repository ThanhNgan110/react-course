import React from 'react';
import Button from '../../components/ui/Button'

/*
pure Component/Presentation Component/Stateless component
  just only present the props.
  don’t need a state.
  reuse code. 

Stateful/Container component
  Contains logic code in component.
  Dependent on state for rendering, 
  such as fetching data.
  Elements that are interactive on page.
  Elements that accept user input.

How many ways to component re-render
- state changes
- component parent re-render -> component child re-render
- props changes
- key changes (force component render)

my component -> render Chart (third party) -> update state option label: true, timestamp
-> my component re-render -> but Chart key={timestamp} not re-render
*/

function Component() {
  const [timestamp, setTimestamp] = React.useState(Date.now());
    
  // user click -> () => {} -> updateTimestamp() => execution
  // re-created every component re-render
  function updateTimestamp(number: number) {
    setTimestamp(Date.now() + number);
  }

  // user click -> updateTimestamp() => execution
  // const updateTimestamp = (number: number) => () => {
  //   setTimestamp(Date.now() + number);
  // }

  console.log('Component: ', timestamp)
  return (
    <div>
      <h1>Component</h1>

      <Button 
        key={timestamp}
        buttonText='Ok'
        onClick={() => { updateTimestamp(10) }}
        // onClick={updateTimestamp(10)}
      />
    </div>
  )
}

export default Component