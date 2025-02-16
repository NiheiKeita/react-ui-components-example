
import React from 'react'
import { List } from '../../types'

type Props = {
  list: List[]
  color: string
}
export const TypeJList = React.memo<Props>(function TypeJList({
  list,
  color
}) {

  return (
    <div>
      {list.map((item, index) => (
        <div
          key={index}
          className="group grid grid-cols-3 items-center"
          style={index % 2 === 0 ? { backgroundColor: color, color: "white" } : { backgroundColor: 'white', color: color }}
        >
          <div className="flex w-full flex-col items-center p-1">
            <div>
              {item.title}
            </div>
          </div>
          <div className="col-span-2 p-1 ps-2">{item.content}</div>
        </div>
      ))}
    </div >
  )
})
