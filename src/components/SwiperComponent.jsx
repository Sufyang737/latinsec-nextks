// Import Swiper React components
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';
import { DataTestimonials } from '../data/dataTestimonials';
import { TestimonialCard } from './TestimonialCard';

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.50': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {DataTestimonials.map((data, i) => (
          <SwiperSlide key={i}>
            <TestimonialCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
