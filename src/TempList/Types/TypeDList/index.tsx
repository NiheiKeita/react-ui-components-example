
import React from 'react'
import { List } from '../../types'

type Props = {
  list: List[]
  color: string
}
export const TypeDList = React.memo<Props>(function TypeDList({
  list,
  color
}) {

  return (
    <div>
      {list.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3 items-center border-b py-2 last:border-b-0"
          style={{ borderColor: color }}
        >
          <div className="flex flex-col items-center">
            <div
              className="rounded-full px-4  text-white"
              style={{ backgroundColor: color }}
            >
              {item.title}
            </div>
          </div>
          <div className="col-span-2 ps-2 text-black">{item.content}</div>
        </div>
      ))}
    </div >
    // <div>
    //   {list.map((item, index) => (
    //     <div
    //       key={index}
    //       className="grid grid-cols-3 items-center border-b border-gray-300 py-2 last:border-b-0"
    //     >
    //       <div className="flex flex-col items-center">
    //         <div
    //           className="rounded-full px-4  text-white"
    //           style={{ backgroundColor: color }}
    //         >
    //           {item.title}
    //         </div>
    //       </div>
    //       <div className="col-span-2 ps-2 text-black">{item.content}</div>
    //     </div>
    //   ))}
    // </div >
  )
})
