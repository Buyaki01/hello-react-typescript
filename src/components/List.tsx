// A component that is very generic

import { ReactNode } from "react";

// We can use generics with an interface
interface ListProps<T> {
  items: T[],
  render: (item: T) => ReactNode
}

export const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          {render(item)}
        </li>
      ))}
    </ul>
  )
}