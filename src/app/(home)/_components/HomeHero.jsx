"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="home-hero__container _container">
        <div className="home-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.2}
            className="home-hero__title">
            <span>Affiliate Advertising</span>
            Done right.
          </motion.h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
            className="home-hero__image">
          </motion.div>
          <div className="home-hero__items">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
              className="home-hero__item">
              Global media <br /> reach
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.4}
              className="home-hero__item">
              Premium ad <br /> placements
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.5}
              className="home-hero__item">
              Wide industry <br /> coverage
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;