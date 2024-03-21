'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '../../components/ui/button'

export default function Submit({ children }: React.PropsWithChildren) {
  const status = useFormStatus()
  return (
    <Button type="submit" disabled={status.pending} aria-disabled={status.pending}>
      {children}
    </Button>
  )
}
