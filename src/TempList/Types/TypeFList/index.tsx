
import React from 'react'
import { List } from '../../types'

type Props = {
  list: List[]
  color: string
}
export const TypeFList = React.memo<Props>(function TypeFList({
  list,
  color
}) {

  return (
    <div>
      {list.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3 items-center"
        >
          <div className="flex flex-col items-center border-r-2 py-1"
            style={{ borderColor: color }}>
            <div
              className="w-full break-words text-center"
              style={{ color: color }}
            >
              {item.title}
            </div>
          </div>
          <div className="col-span-2 w-full break-words ps-2 text-center text-black">{item.content}</div>
        </div>
      ))}
    </div >
  )
})
