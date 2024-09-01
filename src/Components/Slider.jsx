import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import landscape from "../image/landscape.png"

import 'swiper/css';
import 'swiper/css/effect-fade';

const images = [
    landscape,
];

const Slider = () => {
  return (
    <Swiper className='w-full sm:h-40 md:h-[200px]' modules={[EffectFade]} effect="fade">
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index + 1}`} style={{ width:'100%' , height: '100%' , objectfit:"cover" }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
