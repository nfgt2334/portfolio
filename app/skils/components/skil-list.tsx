'use client'

import style from './skil-list.module.scss'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import PrimaryCard from '@/components/ui/card/card'
import { useSkils } from '../hooks/useSkils'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay } from 'swiper/modules'

export default function SkilList() {
  const { skils } = useSkils()

  return (
    <div className={style.SwiperCarouselDiv}>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
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
