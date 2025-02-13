
import React from 'react'
import { List } from '../../types'

type Props = {
  list: List[]
  color: string
}
export const TypeAList = React.memo<Props>(function TypeAList({
  list,
  color
}) {

  return (
    <div className="">
      {list.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3 items-center border-b py-1 last:border-b-0"
          style={{ borderColor: color }}
        >
          <div className="flex flex-col items-center">
            <div
              className="font-semibold"
              style={{ color: color }}
            >
              {item.title}
            </div>
          </div>
          <div className="col-span-2 ps-2 text-black">{item.content}</div>
        </div>
      ))}
    </div >
  )
})
