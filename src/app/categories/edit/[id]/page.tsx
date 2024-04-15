interface PageParams {
  params: {
    id: string
  }
}

export default function page({ params }: PageParams) {
  const id = params.id
  return <div>id: {id}</div>
}
