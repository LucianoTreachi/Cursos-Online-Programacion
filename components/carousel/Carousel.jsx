"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Carousel.module.css";

export default function Carousel({ courses, category }) {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  // Load the saved index from sessionStorage when the component mounts
  useEffect(() => {
    const savedIndex = sessionStorage.getItem(`lastSlideIndex-${category}`);
    if (savedIndex !== null) {
      setSlideIndex(Number(savedIndex));
    }
  }, [category]);

  // Update the active slide and save the index in sessionStorage
  useEffect(() => {
    if (swiperInstance && slideIndex !== swiperInstance.activeIndex) {
      swiperInstance.slideTo(slideIndex, 0);
    }
  }, [swiperInstance, slideIndex]);

  const handleSlideChange = useCallback(
    (swiper) => {
      const activeIndex = swiper.activeIndex;
      setSlideIndex(activeIndex);
      sessionStorage.setItem(`lastSlideIndex-${category}`, activeIndex);
    },
    [category]
  );

  return (
    <Swiper
      className={styles.swiper}
      slidesPerView={"auto"}
      spaceBetween={20}
      modules={[Navigation]}
      navigation={true}
      loop={false}
      onSwiper={setSwiperInstance}
      onSlideChange={handleSlideChange}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {courses.map((course, index) => (
        <SwiperSlide className={styles.swiperSlide} key={index}>
          <Link href={`/curso/${course.url}`}>
            <div className={styles.imageWrapper}>
              <Image
                src={course.thumbnail}
                alt={`${course.title}, ${course.author}, ${course.duration}.`}
                fill
                loading="lazy"
              />
            </div>
          </Link>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
