import React, { useRef } from "react";

/* react hook form, formik

uncontroller component / uncontroller input
- Uncontrolled inputs are like traditional HTML form inputs
- The input value is not being managed by React.
- Don’t cause re-render component.
- They remember what you typed. You can then get their value using a ref.

controller component / controller input
- The value  is handled by the react state.
- It is one that takes its current value through props and notifies changes through 
callbacks like onChange. A parent component "controls" it by handling the callback 
and managing its own state and passing the new values as props to the controlled component.
*/

function Form() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const [lastName, setLastName] = React.useState('');
  const [form, setForm] = React.useState({
    age: 20,
    city: ''
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement> ) {
    e.preventDefault();
    console.log('onSubmit: ', {
      firstName: firstNameRef.current?.value,
      lastName,
      form
    })  
  }

  function onChangeForm(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setForm(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  console.log('Form render')
  return (
    <div>
      <h1>Form</h1>

      <form onSubmit={onSubmit}>
        First Name: <input type="text" id="firstName" defaultValue="tony" ref={firstNameRef} /> <br />
        Last Name: <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
        <br />
        Age: <input type="text" id="age" name="age" onChange={onChangeForm} /> <br />
        City: <input type="text" id="city" name="city" onChange={onChangeForm} />
        
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form