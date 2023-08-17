import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState<number>(1)
  // const [count, setCount] = useState<number | null>(null)

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
    </>
  )
}