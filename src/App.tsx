import { useState, useEffect, useCallback, useMemo, useRef, MouseEvent, KeyboardEvent } from "react"

interface User {
  id: number,
  username: string,
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2) 
}

const myNum: number = 37

function App() {
  // const [count, setCount] = useState<User[]>([])
  // const [count, setCount] = useState<User>({} as User) // You would only do this if you knew you were going to fill this state very quickly or it could cause some errors 
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null) //we could have null! to explicitly tell TypeScript that you are aware that the initial value might be null, but you are asserting that it won't be null during the runtime of your code

  // if (!inputRef.current) // typeof

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  useEffect(() => {
    console.log('mounting')
    console.log('Users: ', users)

    return () => console.log('unmounting')

  }, [users])

  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => setCount(prev => prev + 2), [])

  const result = useMemo(() => fib(myNum), [myNum])

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text"/>
    </div>
  )
}

export default App
