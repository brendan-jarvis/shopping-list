import Nav from '@/components/Nav'
import Card from '@/components/Card'
import type { List } from '@/utils/Types'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  const [data, setData] = useState<List[]>([
    {
      id: 1,
      name: 'List 1',
      items: [
        {
          id: 1,
          content: 'Item 1',
          listId: 1,
        },
        {
          id: 2,
          content: 'Item 2',
          listId: 1,
        },
        {
          id: 3,
          content: 'Item 3',
          listId: 1,
        },
      ],
    },
    {
      id: 2,
      name: 'List 2',
      items: [
        {
          id: 4,
          content: 'Item 4',
          listId: 2,
        },
      ],
    },
    {
      id: 3,
      name: 'List 3',
      items: [
        {
          id: 5,
          content: 'Item 5',
          listId: 3,
        },
      ],
    },
  ])

  return (
    <main className={`${inter.className}`}>
      <Nav />
      <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
        {data.map((list) => (
          <Card key={list.id} list={list} data={data} setData={setData} />
        ))}
      </div>
    </main>
  )
}

export default Home
