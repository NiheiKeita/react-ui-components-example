import { format } from "date-fns"
import React from "react"
import { CalenderDay } from "../types/CalenderDay"

type Props = {
  // eslint-disable-next-line no-unused-vars
  handleClick: (day: Date) => void,
  day: CalenderDay,
}

export const CalenderDailyView = React.memo<Props>(function CalenderDailyView({
  handleClick,
  day,
},) {
  return (
    <div className=" m-2 flex cursor-pointer items-center justify-center rounded-xl bg-pink-200 shadow-md" onClick={() => handleClick(day.date)}>
      <p className="p-2 text-pink-600 ">{format(day.date, "dd")}</p>
    </div>
  )
})
