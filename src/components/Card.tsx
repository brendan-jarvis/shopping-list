import { useState } from 'react'
import { List, Item } from '@/utils/Types'

type CardProps = {
  list: List
  data: List[]
  setData: (data: List[]) => void
}

const Card = ({ list, data, setData }: CardProps) => {
  const [item, setItem] = useState('')

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const newItem = {
      id: list.items[list.items.length - 1].id + 1,
      content: item,
      listId: list.id,
    }

    setData(
      data.map((l) =>
        l.id === list.id ? { ...l, items: [...l.items, newItem] } : l
      )
    )
    setItem('')
  }

  const moveItem = (
    item: Item,
    fromList: List,
    toListId: number,
    itemId: number
  ) => {
    const toList = data.find((list) => list.id === toListId)

    if (!toList) {
      return
    }

    fromList.items = fromList.items.filter((item) => item.id !== itemId)

    toList.items.push(item)

    console.log(data)
  }

  return (
    <div className="flex flex-col justify-end">
      <h2 className="mb-2 text-center font-bold leading-5 tracking-tight">
        {list.name}
      </h2>
      <div className="mb-4 h-96 w-72 rounded-lg bg-[#D9D9D9] p-4 py-4 text-base">
        <div className="flex h-full flex-col justify-between">
          <ul className="space-y-4">
            {list.items.map((item) => (
              <li key={item.id} className="rounded-lg bg-white px-4 py-2">
                <button
                  className="rounded-lg bg-[#D9D9D9] text-sm"
                  onClick={() => moveItem(item, list, item.listId - 1, item.id)}
                >
                  ⬅️
                </button>
                {item.content}
                <button
                  onClick={() => moveItem(item, list, item.listId + 1, item.id)}
                >
                  ➡️
                </button>
              </li>
            ))}
          </ul>
          <form
            className="mt-auto flex items-center gap-2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className="w-52 rounded-lg bg-white p-2 text-black"
            />
            <button
              type="submit"
              className="rounded-lg bg-white p-2 text-xs text-black"
            >
              GO
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Card
