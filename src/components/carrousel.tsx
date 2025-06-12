import img01 from '../assets/01.jpg'
import img02 from '../assets/02.jpg'
import img03 from '../assets/03.jpg'
import img04 from '../assets/04.jpg'
import img05 from '../assets/05.jpg'
import img06 from '../assets/06.jpg'

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

const images = [img01, img02, img03, img04, img05, img06]

export function Carrousel() {
  return (
    <div className="mx-auto h-[31.25rem] rounded-xl w-80 bg-zinc-300 overflow-hidden">
      <Swiper
        className="h-full [&>.swiper-wrapper]:h-full"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              className="w-full h-full object-cover object-center"
              src={img}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
