import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

const images = [
  "https://images.unsplash.com/photo-1579547621869-0ddb5f237392?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1653389527532-884074ac1c65?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
