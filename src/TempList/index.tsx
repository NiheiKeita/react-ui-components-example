
import React from 'react'
import { List } from './types'
import { Match, When } from '../MatchWhen'
import { TypeAList } from './Types/TypeAList'

type Props = {
  list: List[],
  type?: "A" | "B",
  color?: string
}
export const TempList = React.memo<Props>(function TempList({
  list,
  type = "A",
  color = "text-blue-600"
}) {
  return (
    <Match >
      <When exp={type === "A"}>
        <TypeAList list={list} color={color} />
      </When>
    </Match >
  )
})
