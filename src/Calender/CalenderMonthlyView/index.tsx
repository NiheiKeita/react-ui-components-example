import React from "react"
import { CalenderDailyView } from "../CalenderDailyView"
import { CalenderHeaderView } from "../CalenderHeaderView"
import { CalenderMonth } from "../types/CalenderMonth"

type Props = {
  handlePrevClick: () => void,
  handleDayClick: () => void,
  handleNextClick: () => void,
  calender: CalenderMonth,
}

export const CalenderMonthlyView = React.memo<Props>(function CalenderMonthlyView({
  handlePrevClick,
  handleDayClick,
  handleNextClick,
  calender,
},) {
  const dayOfWeeks = ["日", "月", "火", "水", "木", "金", "土"]
  const emptyDteNum: number = calender.days[0].date.getDay()

  return (
    <div>
      <CalenderHeaderView handlePrevClick={handlePrevClick} handleNextClick={handleNextClick}>
        {calender.month}月 カレンダー
      </CalenderHeaderView>
      <div className="mt-5 grid grid-cols-7">
        {
          dayOfWeeks.map((dayOfWeek) => {
            return (
              <div className="flex items-center justify-center bg-slate-400" key={dayOfWeek} >{dayOfWeek}</div>
            )
          })
        }
        {
          [...Array(emptyDteNum)].map((value) => {
            return (<div key={value}></div>)
          })
        }
        {
          calender.days.map((day, index) => {
            return (
              <CalenderDailyView key={index} day={day} handleClick={handleDayClick} />
            )
          })
        }
      </div>
    </div>
  )
})
