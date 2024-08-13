import React, { useState } from 'react'

type Props = {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
};

export const TurnOverCard = React.memo<Props>(function TurnOverCard({
  frontContent,
  backContent,
}) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="h-40 w-64"
      style={{
        perspective: '1000px',
      }}
    >
      <div
        className={`relative size-full transition-transform duration-700`}
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
        onClick={() => setFlipped(!flipped)}
      >
        {/* カードの表面 */}
        <div
          className="absolute flex size-full items-center justify-center bg-blue-500 text-white"
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          {frontContent}
        </div>
        {/* カードの裏面 */}
        <div
          className="absolute flex size-full items-center justify-center bg-red-500 text-white"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
          }}
        >
          {backContent}
        </div>
      </div>
    </div>
  )
})
