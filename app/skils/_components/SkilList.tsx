'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { useSkils } from '../_hooks/useSkils'

export function SkilList() {
  const { skils } = useSkils()

  return (
    <div>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={3}
        // loop
        // autoplay={{ delay: 2500 }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 250,
          modifier: 1,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[EffectCoverflow, Autoplay]}
      >
        {skils.map((skil) => (
          <SwiperSlide key={skil.name}>
            <div className="flex flex-col items-center justify-center h-full">
              <skil.icon color={skil.color} className="w-40 h-56" />
              <div className="mt-2">
                <p className="font-bold mb-2">{skil.name}</p>
                <p className="mb-2">経験年数：{skil.passedYear}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
