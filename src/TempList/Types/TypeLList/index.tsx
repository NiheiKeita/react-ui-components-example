
import React from 'react'
import { List } from '../../types'

type Props = {
  list: List[]
  color: string
}
export const TypeLList = React.memo<Props>(function TypeLList({
  list,
  color
}) {

  return (
    <div className='grid gap-2'>
      {list.map((item, index) => (
        <div
          key={index}
          className="group grid gap-1 border-l-2 py-2 ps-2"
          style={{ borderColor: color }}
        >
          <div
            className="w-full break-words font-bold"
            style={{ color: color }}
          >
            {item.title}
          </div>
          <div className="col-span-2 w-full break-words text-black">{item.content}</div>
        </div>
      ))}
    </div >
  )
})
