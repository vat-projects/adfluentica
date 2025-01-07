"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import WorkSlider from "./WorkSlider";
import Link from "next/link";

const HomeDiscover = () => {
  return (
    <section className="home-discover">
      <div className="home-discover__container _container">
        <div className="home-discover__body">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
            className="home-discover__label"
          >
            WHO WE WORK WITH
          </motion.h3>
          <Link href="/industry-focus" className="home-discover__more">Explore Industries</Link>
          <div className="home-discover__bubbls"></div>
        </div>
      </div>
      <WorkSlider />
    </section>
  );
};

export default HomeDiscover;
