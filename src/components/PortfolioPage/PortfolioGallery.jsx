import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function PortfolioGallery({ images }) {
  return (
    <div className="w-1/2 h-[500px] flex items-center justify-center md:w-full sm:h-[400px]">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper  rounded-[10px]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
