
/*
- render 1 component in jsx
 - must closed element: <Snake />
 - must write upper text first: Snake

type variable in javascript
- primitive: number, string, boolean, null, undefiend, Symbol - compare value
  const a = 2;
  const b = 2;
  a === b -> true
- non-primitive: object, array, function ... - compare reference
  const objA = {
    firstName: '',
    age: 18
    like-bird: 'abc',
    show loading: true
  };
  const objB = {};
  objA === objB -> false
access properties in object
- dot notion:
  user.firstName, user.age
- ['...']
  user['firstName'], user['like-bird'], user['show loading']

destructuring object
{ firstName, age } = objA
spread operators -> pass all properties without list out each.
rest operators -> get remain properties
*/

interface User {
  firstName: string,
  lastName: string,
  address: {
    name: string,
  }
}

interface SnakeProps {
  user: User,
  name: string,
  buttonText?: string,
  newbie: string,
  subject: string,
  age: number,
  isLoading: boolean,
  colors: string[],
  onClick: () => void
}

function Snake({ 
  user, 
  name, 
  buttonText = "Submit", 
  newbie, 
  subject, 
  component1: Component1, // rename properties
  component2,
  ...restProps 
}: SnakeProps) {
  console.log('snake: ', {
    firstName: user.firstName,
    newbie,
    subject,
    restProps,
    component2
    // bird: props['like-bird']
  })
  return (
    <div className="snake">
      {name}
      <button type="button">{buttonText}</button> <br />
      Component 1: <Component1 buttonText="Tony" /> <br />
      Component 2: {component2}
    </div>
  )
}

function Button({ buttonText, children, ...restProps }) {
  return (
    <>
      <button {...restProps}>{buttonText}</button> <br />
      {children}
    </>
  )
}

function Props() {
  const greeting = {
    newbie: 'minh',
    subject: 'react'
  }
  return (
    <div>
      <h1>Props</h1>
      <br />
      <Button 
        buttonText="Submit"
        className="button"
        type="submit"
        onClick={() => {}}
      > 
        this is children
      </Button>
      <br /><br />

      <Snake 
        name="snake" // string
        age={20} // number
        isLoading // boolean
        colors={['green','red','blue']} // array
        user={{
          firstName: 'minh',
          lastName: 'nguyen',
          address: {
            name: 'le van sy'
          }
        }} // object
        onClick={() => {
          console.log('onClick')
        }}
        like-bird="mimi"
        buttonText="Ok"
        component1={Button} // pass name react element type
        component2={<Button buttonText="Submit"/>} // pass direct React Component
        {...greeting}
      />
    </div>
  )
}

export default Props