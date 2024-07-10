import React from "react"

type Props = {
  isOpen: boolean,
  onClose: () => void,
  children: React.ReactNode
}

export const ModalView = React.memo<Props>(function ModalView({
  isOpen, onClose, children
}) {
  const handleClose = () => {
    onClose()
  };
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
          {/* モーダルのバックドロップ */}
          <div className="fixed inset-0 z-40 bg-black opacity-50" data-testid="background" onClick={handleClose}></div>
          <div className="relative z-50 min-h-[50%] w-auto min-w-[50%] max-w-lg rounded-xl bg-white p-6 shadow-md ">
            {/* モーダルのコンテンツ */}
            <div className="relative flex flex-col items-center justify-center" data-testid="foreground">
              {children}
            </div>
            {/* モーダルの閉じるボタン */}
            <div
              className="absolute right-0 top-0 mr-4 mt-4 cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={handleClose}
              data-testid="closeButton"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  )
})
