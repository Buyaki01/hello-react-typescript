import { useState, useEffect, useCallback, MouseEvent, KeyboardEvent } from "react"

interface User {
  id: number,
  username: string,
}

function App() {
  // const [count, setCount] = useState<User[]>([])
  // const [count, setCount] = useState<User>({} as User) // You would only do this if you knew you were going to fill this state very quickly or it could cause some errors 
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  useEffect(() => {
    console.log('mounting')
    console.log('Users: ', users)

    return () => console.log('unmounting')

  }, [users])

  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => setCount(prev => prev + 2), [])

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
    </div>
  )
}

export default App
