
import React from 'react'
import { CalenderDailyView } from '../CalenderDailyView'
import { CalenderHeaderView } from '../CalenderHeaderView'
import { CalenderWeek } from '../types/CalenderWeek'


type Props = {
  handlePrevClick: () => void,
  handleDayClick: () => void,
  handleNextClick: () => void,
  calender: CalenderWeek,
}

export const CalenderWeeklyView = React.memo<Props>(function CalenderWeeklyView({
  handlePrevClick,
  handleDayClick,
  handleNextClick,
  calender,
},) {
  const dayOfWeeks = ["日", "月", "火", "水", "木", "金", "土"]
  const emptyDateNum: number = calender.days[0].date.getDay()

  return (
    <div>
      <CalenderHeaderView handlePrevClick={handlePrevClick} handleNextClick={handleNextClick}>
        週カレンダー
      </CalenderHeaderView>
      <div className="mt-5 grid grid-cols-7">
        {
          [...Array(7)].map((value, index) => {
            return (<div className="flex items-center justify-center bg-slate-400" key={value} >{dayOfWeeks[(emptyDateNum + index) % 7]}</div>)
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

