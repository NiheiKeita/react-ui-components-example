import React from "react"
import { Button } from '../../Button'

type Props = {
  handlePrevClick: () => void,
  handleNextClick: () => void,
  children: React.ReactNode,
  prevText?: string,
  nextText?: string,
}

export const CalenderHeaderView = React.memo<Props>(function CalenderHeaderView({
  handlePrevClick,
  handleNextClick,
  children,
  prevText = '前の月',
  nextText = '次の月',
},) {
  return (
    <div className="flex justify-between">
      <Button onClick={handlePrevClick} data-testid="prevButton" variant={"pink"} >{prevText}</Button>
      <p>{children}</p>
      <Button onClick={handleNextClick} data-testid="nextButton" variant={"pink"} >{nextText}</Button>
    </div>
  )
})
