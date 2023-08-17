import { Counter } from "./components/Counter"
import Heading from "./components/Heading"
import { Section } from "./components/Section"
import { useState } from "react"

function App() {
  const [count, setCount] = useState<number>(1)

  return (
    <>
      <Heading title={"Hello"} />
      <Section title={"Different Title"}>This is my section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
    </>
  )
}

export default App
