
import React from 'react'
import { List } from '../../types'

type Props = {
  list: List[]
  color: string
}
export const TypeEList = React.memo<Props>(function TypeEList({
  list,
  color
}) {

  return (
    <div>
      {list.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3 items-center border-t py-1 last:border-b"
          style={{ borderColor: color }}
        >
          <div
            className="flex flex-col items-center border-r-4 "
            style={{ borderColor: color }}
          >
            <div
              className=""
              style={{ color: color }}
            >
              {item.title}
            </div>
          </div>
          <div className="col-span-2 ps-6 text-black">{item.content}</div>
        </div>
      ))}
    </div >
  )
})
