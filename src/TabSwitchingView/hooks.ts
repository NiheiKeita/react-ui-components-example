import { useState } from "react"

export const useCountView = () => {
  const [count, setCount] = useState<number>(0)
  const addCount = () => {
    setCount(count + 1)
  }

  return {
    count,
    addCount,
  }
}
