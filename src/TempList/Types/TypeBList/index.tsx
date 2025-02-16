
import React from 'react'
import { List } from '../../types'

type Props = {
  list: List[]
  color: string
}
export const TypeBList = React.memo<Props>(function TypeBList({
  list,
  color
}) {

  return (
    <div>
      {list.map((item, index) => (
        <div key={index} className="group grid grid-cols-3 items-center">
          <div
            className="flex flex-col items-center border-b-2 py-1 group-last:border-b-0"
            style={{ borderColor: color }}
          >
            <div className=""
              style={{ color: color }}
            >
              {item.title}
            </div>
          </div>
          <div className="col-span-2 w-full border-b-2 border-gray-300 py-1 ps-2 text-black group-last:border-b-0">
            {item.content}
          </div>
        </div>
      ))}
    </div>
  )
})
