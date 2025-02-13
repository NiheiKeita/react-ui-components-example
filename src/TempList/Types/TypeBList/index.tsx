
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
    <div className="space-y-2">
      {list.map((item, index) => (
        <div key={index} className="grid grid-cols-3 items-center">
          <div
            className="flex flex-col items-center border-b-2"
            style={{ borderColor: color }}
          >
            <div className="font-semibold"
              style={{ color: color }}
            >
              {item.title}
            </div>
          </div>
          <div className="col-span-2 w-full border-b-2 border-gray-300 ps-2 text-black">
            {item.content}
          </div>
        </div>
      ))}
    </div>
  )
})
