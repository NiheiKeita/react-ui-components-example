
import React from 'react'
import { List } from '../../types'

type Props = {
  list: List[]
  color: string
}
export const TypeCList = React.memo<Props>(function TypeCList({
  list,
  color
}) {

  return (
    <div>
      {list.map((item, index) => (
        <div
          key={index}
          className="group grid grid-cols-3 items-center gap-4 py-1"
        >
          <div
            className="flex flex-col items-center border-b  group-last:border-b-0"
            style={{ borderColor: color }}
          >
            <div
              className="font-semibold"
              style={{ color: color }}
            >
              {item.title}
            </div>
          </div>
          <div
            className="col-span-2 border-b ps-2 text-black  group-last:border-b-0"
            style={{ borderColor: color }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div >
  )
})
