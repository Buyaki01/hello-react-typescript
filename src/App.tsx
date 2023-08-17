import { useState } from "react"

interface User {
  id: number,
  username: string,
}

function App() {
  // const [count, setCount] = useState<User[]>([])
  // const [count, setCount] = useState<User>({} as User) // You would only do this if you knew you were going to fill this state very quickly or it could cause some errors 
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  return (
    <>
    </>
  )
}

export default App
