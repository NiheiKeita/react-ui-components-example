
import React from 'react'
import { List } from '../../types'

type Props = {
  list: List[]
  color: string
}
export const TypeIList = React.memo<Props>(function TypeIList({
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
          <div className="flex w-full flex-col items-center border-b-2 border-white p-1 text-white group-first:border-t-2"
            style={{ backgroundColor: color }}
          >
            <div>
              {item.title}
            </div>
          </div>
          <div className="col-span-2 box-border border-x-2 border-b-2 bg-white p-1 ps-2 text-black group-first:border-t-2"
            style={{ borderColor: color }}
          >{item.content}</div>
        </div>
      ))}
    </div >
  )
})
