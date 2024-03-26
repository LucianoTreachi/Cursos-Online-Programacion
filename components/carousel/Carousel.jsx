"use client";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Link from "next/link";
import Image from "next/image";
import styles from "./Carousel.module.css";

export default function Carousel({ courses }) {
  return (
    <Swiper
      className={styles.swiper}
      slidesPerView={"auto"}
      spaceBetween={20}
      modules={[Navigation]}
      navigation={true}
      loop={true}
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
            <Image
              src={course.image}
              alt="Portada del curso"
              width={640}
              height={360}
              loading="lazy"
            />
          </Link>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
