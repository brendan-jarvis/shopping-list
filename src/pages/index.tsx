import Nav from '@/components/Nav'
import Card from '@/components/Card'
import type { List } from '@/utils/Types'

const data: List[] = [
  {
    id: 1,
    name: 'List 1',
    items: [
      {
        id: 1,
        content: 'Item 1',
      },
      {
        id: 2,
        content: 'Item 2',
      },
      {
        id: 3,
        content: 'Item 3',
      },
    ],
  },
  {
    id: 2,
    name: 'List 2',
    items: [
      {
        id: 1,
        content: 'Item 4',
      },
    ],
  },
  {
    id: 3,
    name: 'List 3',
    items: [
      {
        id: 1,
        content: 'Item 5',
      },
    ],
  },
]

const Home = () => {
  return (
    <>
      <Nav />
      <div className="flex items-center justify-center">
        <div className="flex gap-4">
          {data.map((list) => (
            <Card key={list.id} list={list} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
