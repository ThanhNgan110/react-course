import React from "react"
import Button from "../../components/ui/Button";

/*
&&: xét vế trái/phải
- vế trái là true thì lấy vế phải
- vế trái là false thì lấy vế trái

'' && 'tony' -> ''
'tony' &&  '' -> ''
'tomy' && 'react' && 'ngan' -> 'ngan'

||: lấy giá trị mà nó là true đầu tiên
'' || 'tony' -> 'tony'
'tony' || 'ngan' -> 'tony'
'' || 'ngan' || 'react' -> 'ngan'
*/

function LoginButton() {
  return (
    <button className="button" type="button">Login</button>
  )
}

function LogoutButton() {
  return (
    <button className="button" type="button">logout</button>
  )
}

interface ITodo {
  title: string
}

function ConditionalRendering() {
  const [todos, setTodos] = React.useState<any | ITodo[]>(null);
  const [isAuthenticate, setIsAuthenticate] = React.useState(false);
  let renderButton = <LoginButton />;

  if (isAuthenticate) {
    renderButton = <LogoutButton />
  }

  return (
    <div>
      <h1>ConditionalRendering</h1>
      <h4>List Todo</h4>
      {Array.isArray(todos) && todos.map(todo => (
        <div>Title: {todo.title}</div>
      ))}

      {Array.isArray(todos) ? (
        <>
          {todos.map(todo => (
            <div>Title: {todo.title}</div>
          ))}
        </>
      ) : (
        <div>Not todo...</div>
      )}
      <br/>
      Authenticate: 
      <Button 
        buttonText="Toggle Authenticate" 
        onClick={() => setIsAuthenticate(!isAuthenticate)} 
      /> <br />
      {/* {isAuthenticate ? <LogoutButton /> : <LoginButton />} */}
      {renderButton}
    </div>
  )
}

export default ConditionalRendering