import { PropsWithChildren } from 'react'

export default function layout({ children }: PropsWithChildren) {
  return (
    <div>
      <h2>Categories</h2>
      <div>{children}</div>
    </div>
  )
}
