"use client";
import React from "react";
import "@/styles/marquee.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, EffectFade } from "swiper/modules";

const WorkSlider = () => {
  return (
    <div className="marqueeContainer">
      <div className="marquee">
        <img src="/images/home/slide.svg" alt="Marquee Slide" />
        <img src="/images/home/slide.svg" alt="Marquee Slide" />
        <img src="/images/home/slide.svg" alt="Marquee Slide" />
        <img src="/images/home/slide.svg" alt="Marquee Slide" />
        <img src="/images/home/slide.svg" alt="Marquee Slide" />
        <img src="/images/home/slide.svg" alt="Marquee Slide" />
        <img src="/images/home/slide.svg" alt="Marquee Slide" />
        <img src="/images/home/slide.svg" alt="Marquee Slide" />
      </div>
    </div>
  );
};

export default WorkSlider;
