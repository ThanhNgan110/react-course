import React, { memo, useCallback } from 'react'

/*
memo
- Higher order-component.
- Prevent the component re-render unnecessary.
- It takes 2 arguments: one for React Component, one for custom compare (option). 
- Shallow comparison.

useCallback
- Returns a memorized callback function.
- Callback function will re-runs if one of the dependencies has changed.

useMemo
- return a memoried value
*/

interface CardProps {
  book: {
    title: string,
    caption: string
  },
  updateBackgroundColor: () => void
}

const Card = memo(({ book, updateBackgroundColor }: CardProps) => {
  console.log('Card Performance Hook')
  return (
    <div
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {book.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {book.caption}
      </p>

      <button type="button" onClick={updateBackgroundColor}>Update Bg Card</button>
    </div>
  )
});

// function customEqual(prevProps: any, nextProps: any) {
//   console.log('customEqual card: ', {prevProps, nextProps})
//   return prevProps.book.title === nextProps.book.title
// }

function PerformanceHook() {
  const [count, setCount] = React.useState(1);
  const [book, setBook] = React.useState({
    title: '',
    caption: 'caption card'
  })
  const [cart, setCart] = React.useState([
    { id: 1, product: 'iphone', quanlity: 1, price: 1000 },
    { id: 2, product: 'samsung', quanlity: 2, price: 500 },
    { id: 3, product: 'tivi', quanlity: 1, price: 700 },
  ]);

  const totalPrice = React.useMemo(() => {
    console.log('useMemo totalPrice')
    return cart.reduce((acc, curr) => {
      acc += curr.quanlity * curr.price
      return acc
    }, 0)
  }, [cart])

  function updateCount() {
    setCount(prevState => prevState + 1)
  }

  function updateBook() {
    const newTitle = 'Card' + Date.now();
    setBook(prevState => ({
      ...prevState,
      // title: newTitle
      caption: newTitle
    }))
  }

  function updateCart() {
    const newItem = { id: 4, product: 'keyboard', quanlity: 1, price: 200 }
    setCart(prevState => [...prevState, newItem])
  }

  // re-created every component re-render
  const updateBackgroundColor = useCallback(() => {
    console.log('updateBackgroundColor')
  }, [count])

  console.log('Performance Hook')
  return (
    <div>
      <h1>PerformanceHook</h1>

      Count: {count} <br />
      <br />
      Total Price: {totalPrice} <br />
      <button type="button" onClick={updateCount}>Update Count</button>
      <button type="button" onClick={updateBook}>Update Book</button>
      <button type="button" onClick={updateCart}>Update Cart</button>

      <Card book={book} updateBackgroundColor={updateBackgroundColor} />
    </div>
  )
}

export default PerformanceHook