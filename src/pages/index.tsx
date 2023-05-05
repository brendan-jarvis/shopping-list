import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const data = [
    { id: 1, name: 'Item 1', list: 'list1' },
    { id: 2, name: 'Item 2', list: 'list1' },
    { id: 3, name: 'Item 3', list: 'list1' },
    { id: 4, name: 'Item 4', list: 'list2' },
    { id: 5, name: 'Item 5', list: 'list3' },
  ]

  return (
    <>
      <Nav />
      <h1>Hello World</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}
