
import React from 'react'
import { List } from '../../types'

type Props = {
  list: List[]
  color: string
}
export const TypeKList = React.memo<Props>(function TypeKList({
  list,
  color
}) {

  return (
    <div>
      {list.map((item, index) => (
        <div
          key={index}
          className="group grid grid-cols-3 items-center"
        >
          <div className="flex flex-col items-center border-l-2 py-1 group-first:pt-4 group-last:pb-4"
            style={{ borderColor: color }}>
            <div
              className="w-full break-words text-center"
              style={{ color: color }}
            >
              {item.title}
            </div>
          </div>
          <div className="col-span-2 w-full break-words text-center text-black group-first:pt-4 group-last:pb-4">{item.content}</div>
        </div>
      ))}
    </div >
  )
})
