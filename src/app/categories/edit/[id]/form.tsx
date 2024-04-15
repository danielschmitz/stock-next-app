'use client'
import { useState } from 'react'
import Submit from '../../Submit'

interface UpdateFormProps {
  data: {
    id: string
    name: string
  }
}

export default function UpdateForm(props: UpdateFormProps) {
  const [name, setName] = useState(props.data.name)
  function handleChange(event: any) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <input type="hidden" name="id" value={props.data.id} />
        <label>
          Name:
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 m-3 text-gray-700 
              leading-tight focus:outline-none focus:shadow-outline min-w-[300px]"
            id="name"
            name="name"
            value={props.data.name}
            onChange={handleChange}
          />
        </label>
        <Submit>Save</Submit>
      </form>
    </div>
  )
}
