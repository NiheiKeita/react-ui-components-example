
import React from 'react'
import { List } from './types'
import { Match, When } from '../MatchWhen'
import { TypeAList } from './Types/TypeAList'
import { TypeBList } from './Types/TypeBList'
import { TypeCList } from './Types/TypeCList'
import { TypeDList } from './Types/TypeDList'
import { TypeEList } from './Types/TypeEList'
import { TypeFList } from './Types/TypeFList'
import { TypeGList } from './Types/TypeGList'
import { TypeHList } from './Types/TypeHList'
import { TypeIList } from './Types/TypeIList'
import { TypeJList } from './Types/TypeJList'
import { TypeKList } from './Types/TypeKList'
import { TypeLList } from './Types/TypeLList'

type Props = {
  list: List[],
  type?: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L",
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
      <When exp={type === "D"}>
        <TypeDList list={list} color={color} />
      </When>
      <When exp={type === "E"}>
        <TypeEList list={list} color={color} />
      </When>
      <When exp={type === "F"}>
        <TypeFList list={list} color={color} />
      </When>
      <When exp={type === "G"}>
        <TypeGList list={list} color={color} />
      </When>
      <When exp={type === "H"}>
        <TypeHList list={list} color={color} />
      </When>
      <When exp={type === "I"}>
        <TypeIList list={list} color={color} />
      </When>
      <When exp={type === "J"}>
        <TypeJList list={list} color={color} />
      </When>
      <When exp={type === "K"}>
        <TypeKList list={list} color={color} />
      </When>
      <When exp={type === "L"}>
        <TypeLList list={list} color={color} />
      </When>
    </Match >
  )
})
