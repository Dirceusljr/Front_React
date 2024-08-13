import React from "react";
import Slide from "./Slide";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

const Carousel = () => {
  return (
    <section className="w-full h-auto bg-slate-400">
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet-active swiper-pagination-bullet"
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
