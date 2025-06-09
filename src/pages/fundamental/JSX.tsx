import React from "react"

/*
 function component only render one parent element
*/
function JSX() {
  const expression = 1 + 1; // expression js
  const renderButton = (
    <button type="button">Button JSX</button>
  ); // function component

   const renderButtonByFunction = () => {
    return  (
      <button type="button">Button JSX</button>
    ); // function component
   }

  return (
    <React.Fragment key={1}>
     <h1>JSX</h1>
     Expression: {expression} <br />
     Function JSX: {renderButtonByFunction()} <br />
     JSX: {renderButton}
    </React.Fragment>
  )
}

export default JSX