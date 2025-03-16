'use client'

import style from './SkilList.module.scss'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import PrimaryCard from '@/components/atoms/card/PrimaryCard'
import { useSkils } from '../hooks/useSkils'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay } from 'swiper/modules'

export default function SkilList() {
  const { skils } = useSkils()

  return (
    <div className={style.SwiperCarouselDiv}>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={3}
        loop
        autoplay={{ delay: 2500 }}
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
        className={style.Swiper}
      >
        {skils.map((skil) => (
          <SwiperSlide key={skil.name}>
            <PrimaryCard>
              <div className={style[`CardDiv${skil.modifier}`]}>
                <skil.icon color={skil.color} className={style.CardIcon} />
                <div className={style.CardTextDiv}>
                  <p className={style[`SkilNameP${skil.modifier}`]}>
                    {skil.name}
                  </p>
                  <p>経験年数：{skil.passedYear}</p>
                </div>
              </div>
            </PrimaryCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
