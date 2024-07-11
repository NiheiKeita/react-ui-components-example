import React, { useState } from "react"
import { hslToRgb16 } from './hooks'

type Props = {
  defaultColorHSL: number
  // eslint-disable-next-line no-unused-vars
  handleColorSelect: (colorCode: string) => void,
}

export const ColorSelectView = React.memo<Props>(function ColorSelectView({
  defaultColorHSL = 180,
  handleColorSelect,
}) {
  const [color, setColor] = useState(defaultColorHSL)
  const doChangeColorSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const colorHTL = Number(e.target.value)
    setColor(colorHTL)
    console.log(hslToRgb16(colorHTL))

    handleColorSelect('#' + hslToRgb16(colorHTL))
  }

  return (
    <>
      <input type="range" value={color} min="0" max="360"
        data-testid="color"
        onChange={doChangeColorSelect}
        className="w-full appearance-none rounded-lg [&::-moz-range-thumb]:size-2.5
        [&::-moz-range-thumb]:appearance-none
        [&::-moz-range-thumb]:rounded-full
        [&::-moz-range-thumb]:border-4
        [&::-moz-range-thumb]:border-blue-600
        [&::-moz-range-thumb]:bg-white
        [&::-moz-range-thumb]:transition-all
        [&::-moz-range-thumb]:duration-150
        [&::-moz-range-thumb]:ease-in-out
        [&::-webkit-slider-thumb]:-mt-0.5
        [&::-webkit-slider-thumb]:size-2.5
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:bg-white
        [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(101,101,255,1)]
        [&::-webkit-slider-thumb]:transition-all
        [&::-webkit-slider-thumb]:duration-150
        [&::-webkit-slider-thumb]:ease-in-out
        [&::-webkit-slider-thumb]:dark:bg-white"
        style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 0, 0, 1), rgba(204, 255, 0, 1) 20%, rgba(0, 255, 102, 1) 40%, rgba(0, 102, 255, 1) 60%, rgba(204, 0, 255, 1) 80%, rgba(255, 0, 0, 1)" }} />

    </>
  )
})
