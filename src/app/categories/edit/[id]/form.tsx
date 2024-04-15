'use client'

import { useState } from 'react'

export default function UpdateForm() {
  const [count, setCount] = useState(0)
  const handleClick = () => setCount(count + 1)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
