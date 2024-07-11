import React from "react"

type Props = {
  title: string,
  isActive: boolean,
  handleClick: () => void,
}

export const Tab = React.memo<Props>(function Tab({
  title, isActive, handleClick
}) {
  return (
    <div
      className={`${isActive
        ? 'bg-blue-500 text-white'
        : 'text-gray-500 hover:bg-gray-200'
        } cursor-pointer rounded px-4 py-2 focus:outline-none`}
      onClick={handleClick}
    >
      {title}
    </div>
  )
})
Tab.displayName = "CountView"
