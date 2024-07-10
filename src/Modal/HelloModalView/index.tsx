import React, { useState } from "react"
import { ModalView } from "../ModalView"

type Props = {
  isOpen: boolean,
  onClose: () => void,
  children: React.ReactNode
}

export const HelloModalView = React.memo<Props>(function HelloModalView() {
  const [isOpen, setIsOpen] = useState(true)
  const handleClose = () => {
    setIsOpen(false)
  }
  const handleOpenClick = () => {
    setIsOpen(true)
  }
  return (
    <>
      <div className="w-fit cursor-pointer" onClick={handleOpenClick} data-testid="openButton">open</div>
      <ModalView isOpen={isOpen} onClose={handleClose}>
        <div>hello</div>
      </ModalView>
    </>
  )
})
