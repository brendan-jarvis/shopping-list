import { useState } from 'react'
import { List } from '@/utils/Types'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

type CardProps = {
  list: List
}

const Card = ({ list }: CardProps) => {
  const [item, setItem] = useState('')

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const newItem = {
      id: list.items[list.items.length - 1].id + 1,
      content: item,
    }

    list.items.push(newItem)

    setItem('')
  }

  return (
    <div className="font-inter h-96 w-72 bg-gray-300 p-4 py-4 text-base">
      <h2 className="text-center font-bold leading-5 tracking-tight">
        {list.name}
      </h2>
      <ul className="space-y-4">
        {list.items.map((item) => (
          <li key={item.id} className="rounded-lg bg-white px-4 py-2">
            {item.content}
          </li>
        ))}
      </ul>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="rounded-lg bg-white p-2 text-black"
        />
        <button type="submit" className="rounded-lg bg-white p-2 text-black">
          GO
        </button>
      </form>
    </div>
  )
}

export default Card
