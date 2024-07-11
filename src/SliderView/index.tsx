import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper/modules"

type Props = {
  sliders: React.ReactNode[],
  loop?: boolean,
  slidesPerView?: number,
  centeredSlides?: boolean,
  spaceBetween?: number,
  reverse: boolean
}

export const SliderView = React.memo<Props>(function SliderView({
  sliders,
  loop = false,
  slidesPerView = 1,
  centeredSlides = true,
  spaceBetween = 0,
  reverse = false,
}) {
  return (
    <div className="relative m-2 mt-4 rounded-md">
      <Swiper
        dir={reverse ? "rtl" : ""}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        centeredSlides={centeredSlides}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        spaceBetween={spaceBetween}
        loop={loop}
        slidesPerView={slidesPerView}
        modules={[Navigation, Pagination]}
      >
        {sliders.map((slider, index) => {
          return (
            <SwiperSlide key={index}>
              {slider}
            </SwiperSlide>)
        })}
      </Swiper>

      <div
        className="swiper-button-prev absolute inset-y-1/2 left-0 z-10 ms-4 flex cursor-pointer 
        items-center justify-center text-white transition-all hover:ml-3"
      >
        ＜
      </div>
      <div
        className="swiper-button-next absolute inset-y-1/2 right-0 z-10 me-4 flex cursor-pointer 
        items-center justify-center text-white transition-all hover:mr-3"
      >
        ＞
      </div>
      <div
        className="swiper-pagination [&_.swiper-pagination-bullet-active]:!bg-white 
      [&_.swiper-pagination-bullet]:bg-white"
      />
    </div >
  )
})


