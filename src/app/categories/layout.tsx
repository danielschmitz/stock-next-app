import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PropsWithChildren } from 'react'

export default function layout({ children }: PropsWithChildren) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Categories</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
