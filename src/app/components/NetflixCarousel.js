
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

export default function NetflixCarousel() {

  const swiperRef = useRef(null);

  const images = [
    "/images/joga/image.png",
    "/images/joga/PHOTO-2024-06-23-16-48-54.jpg",
    "/images/joga/PHOTO-2025-01-02-11-31-05.jpg",
    "/images/joga/PHOTO-2025-02-15-20-08-16.jpg",
    "/images/joga/PHOTO-2025-05-10-10-07-10.jpg"
  ];

  const handleClick = (index) => {

    const swiper = swiperRef.current.swiper;

    swiper.slideToLoop(index);

    swiper.autoplay.stop();
  };

  const handleMouseLeave = () => {

    const swiper = swiperRef.current.swiper;

    swiper.autoplay.start();
  };

  return (

    <div 
      className="h-[80vh] flex items-center group"
      onMouseLeave={handleMouseLeave}
    >

      <Swiper
        ref={swiperRef}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        navigation={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 250,
          modifier: 2,
          slideShadows: false
        }}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        className="w-full"
      >

        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="!w-auto flex justify-center cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <img
              src={src}
              className="h-[65vh] object-contain transition-all duration-300 hover:scale-105"
            />
          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
}
