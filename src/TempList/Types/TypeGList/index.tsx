
import React from 'react'
import { List } from '../../types'

type Props = {
  list: List[]
  color: string
}
export const TypeGList = React.memo<Props>(function TypeGList({
  list,
  color
}) {

  return (
    <div>
      {list.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3 items-center gap-2 py-1"
          style={{ borderColor: color }}
        >
          <div className="flex w-full flex-col items-center p-1 text-white"
            style={{ backgroundColor: color }}
          >
            <div>
              {item.title}
            </div>
          </div>
          <div className="col-span-2 bg-white p-1 ps-2 text-black">{item.content}</div>
        </div>
      ))}
    </div >
  )
})
