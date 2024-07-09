
import React from "react"

type Props = {
  children: React.ReactNode,
  variant: 'default' | 'pink'
}

export const Button = React.memo<Props>(function Button({
  children,
  variant = 'default'
}) {
  const color = (() => {
    switch (variant) {
      case 'default':
        return 'bg-white text-pink-500'
      case 'pink':
        return 'bg-pink-500 text-white'
    }
  })()

  return (
    <button className={color + ' rounded-full px-4 py-2 font-bold transition-transform duration-200 hover:scale-105'}>
      {children}
    </button>
  )
})
