import React from 'react'

/*
- a way to access DOM nodes or React elements created in the render method.
- Unlike with state, updating a ref does not re-render your component.
- keep new value between component re-render
*/

const callApiAnalytic = () => {
  console.log('call api analytics')
};

const LikeButton = React.forwardRef((props, ref) => {
  const buttonRef = React.useRef<any>(null);

  React.useImperativeHandle(ref, () => {
    return {
      changeBorderButton: () => {
        focusLikeButton();
      },
      nameButton: 'Like Button'
    }
  })

  function focusLikeButton() {
    buttonRef.current.style.border = '1px solid #f00'
  }

  return (
    <>
      Like buttton: <button ref={buttonRef} type="button" onClick={focusLikeButton}>Change Like Color</button>
    </>
  )
}) 

const LastName = React.forwardRef((props, ref) => {
  const [lastName, setLastName] = React.useState('')

  React.useImperativeHandle(ref, () => {
    return {
      getLastName: () => lastName
    }
  })

  return (
    <>
      <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
    </>
  )
})


function RefHook() {
  // let counter = 0;
  let counterRef = React.useRef(0);
  const likeButtonRef = React.useRef<any>(null);
  const lastNameRef = React.useRef<any>(null);
  const isSkipFirstRender = React.useRef(true);
  const firstNameRef = React.useRef<HTMLInputElement | null>(null);
  const [timestap, setTimestamp] = React.useState(Date.now());

  function updateForm() {
    // counter = counter + 1;
    counterRef.current = counterRef.current + 1;
    likeButtonRef.current.changeBorderButton();

    firstNameRef.current?.focus();
    firstNameRef.current?.select()

    console.log('RefHook updateForm: ', lastNameRef.current.getLastName())


    setTimestamp(Date.now())
  }


  React.useEffect(() => {
    if (isSkipFirstRender.current) {
      isSkipFirstRender.current = false;
      return;
    }
    callApiAnalytic();
  })

  console.log("RefHook")

  
  return (
    <div>
      <h1>RefHook</h1>

      Count: {counterRef.current} <br />
      <input ref={firstNameRef} defaultValue="tony" type="text" /> <br />
      Last Name: <LastName ref={lastNameRef} /> <br />
      <button type="button" onClick={updateForm}>Update Form</button>

      <br />
      <LikeButton ref={likeButtonRef} />
    </div>
  )
}

export default RefHook