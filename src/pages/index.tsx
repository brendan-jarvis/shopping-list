import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

type List = {
  id: number
  name: string
  items: Item[]
}

type Item = {
  id: number
  content: string
}

type CardProps = {
  list: List
}

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

const Card = ({ list }: CardProps) => {
  return (
    <div className="py-4 font-inter text-base w-72 h-96">
      <h2 className="font-bold leading-5 tracking-tight text-center">
        {list.name}
      </h2>
      <ul className="bg-gray-300">
        {list.items.map((item) => (
          <li key={item.id} className="bg-white rounded-lg px-4 py-2">
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  )
}

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
