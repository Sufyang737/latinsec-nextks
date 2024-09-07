/* eslint-disable react/prop-types */
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function SwiperCompanies({data}) {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className=""
      >
        {[...data, ...data].map(({ logo }, i) => (
          <SwiperSlide key={i} className='h-36 flex items-center'>
            <div>
              <Image src={logo} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
