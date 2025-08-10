import React from 'react';
import ErrorBoundaryComponent from '../../components/ErrorBoundary';
import { httpRequest } from '../../services/initRequest';


function ReactErrorBoundary() {
  const [count, setCount] = React.useState(1);

  function updateCount() {
    setCount({})
  }

  async function getTodos() {
    // client request a api -> show loading + inject access token
    // BE response
      // success -> hide loading
      // error -> 404 (render ?), 500 (render ?), 403 (render ?)
      // access token expired -> call api refresh token -> sytem auto call api before
  
    const res = await httpRequest('/todos');
    console.log('getTodos: ', res)
  }

  return (
    <div className='react-error-boundary'>
      <ErrorBoundaryComponent>
        <h1>ReactErrorBoundary</h1>
        Count: {count} <br />
        <button type="button" onClick={updateCount}>Update Count</button> <br />
        <button type="button" onClick={getTodos}>Get TOdos</button>
      </ErrorBoundaryComponent>
    </div>
  )
}

export default ReactErrorBoundary