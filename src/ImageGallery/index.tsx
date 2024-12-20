import React, { useState } from "react"

type Props = {
  images: string[]; // 画像URLの配列を受け取る
};

export const ImageGallery = React.memo<Props>(function ImageGallery({
  images,
}) {
  const [selectedImage, setSelectedImage] = useState(images[0]) // 最初の画像を選択状態にする

  return (
    <div className="flex flex-col items-center rounded-lg bg-black p-1 ">
      {/* 大きく表示される選択された画像 */}
      <div className="mb-4 flex h-48 w-full max-w-lg items-center justify-center rounded-lg 
        bg-black sm:h-64 md:h-80 lg:h-96">
        <img
          src={selectedImage}
          alt="Selected"
          className="max-h-full object-contain"
        />
      </div>

      {/* 横スクロール可能なサムネイル */}
      <div className="scrollbar-hide flex w-full max-w-lg flex-nowrap gap-2 overflow-x-auto p-1">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`size-20 shrink-0 rounded-lg border-2 transition-transform duration-200 ${selectedImage === image
              ? "scale-105 border-pink-500"
              : "border-gray-300"
              }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="size-full rounded-lg object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
})
