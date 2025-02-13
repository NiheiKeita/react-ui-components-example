
import React from 'react'
import { List } from './types'
import { Match, When } from '../MatchWhen'
import { TypeAList } from './Types/TypeAList'
import { TypeBList } from './Types/TypeBList'
import { TypeCList } from './Types/TypeCList'

type Props = {
  list: List[],
  type?: "A" | "B" | "C",
  color?: string
}
export const TempList = React.memo<Props>(function TempList({
  list,
  type = "A",
  color = "#004CA0"
}) {
  return (
    <Match >
      <When exp={type === "A"}>
        <TypeAList list={list} color={color} />
      </When>
      <When exp={type === "B"}>
        <TypeBList list={list} color={color} />
      </When>
      <When exp={type === "C"}>
        <TypeCList list={list} color={color} />
      </When>
    </Match >
  )
})
