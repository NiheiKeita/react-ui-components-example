
import React from 'react'
import { List } from '../../types'

type Props = {
  list: List[]
  color: string
}
export const TypeHList = React.memo<Props>(function TypeHList({
  list,
  color
}) {

  return (
    <div>
      {list.map((item, index) => (
        <div
          key={index}
          className="group grid grid-cols-3 items-center"
          style={{ borderColor: color }}
        >
          <div className="flex w-full flex-col items-center p-1 text-white group-first:pt-4 group-last:pb-4"
            style={{ backgroundColor: color }}
          >
            <div>
              {item.title}
            </div>
          </div>
          <div className="col-span-2 bg-white p-1 ps-2 text-black group-first:pt-4 group-last:pb-4">{item.content}</div>
        </div>
      ))}
    </div >
  )
})
