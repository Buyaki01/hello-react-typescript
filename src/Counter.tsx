import { ChangeEvent, ReactNode, useReducer } from 'react'

type ChildrenType = {
  children: (num: number) => ReactNode
}

export const Counter = ({ children }: ChildrenType) => {
  // const [count, setCount] = useState<number>(1)
  // const increment = () => setCount(prev => prev + 1)
  // const decrement = () => setCount(prev => prev - 1)
  
  return (
    <>
      {/* <h1>{children(count)}</h1> */}
      <h1>{children(state.count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <input type="text" onChange={handleTextInput} />
      <h2>{state.text}</h2>
    </>
  )
}