"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeWhat = () => {
  return (
    <section className="home-what">
      <div className="home-what__container _container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.2}
          className="home-what__title"
        >
          What is Adfluentica
        </motion.h2>
        <div className="home-what__body">
          <div className="home-what__col-01">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
              className="home-what__text"
            >
              Access premium media, trusted partnerships, and impactful ad
              placements for effective affiliate campaigns.
            </motion.div>
            <Link href="/about-us" className="home-what__more">Discover Adfluentica</Link>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.4}
            className="home-what__col-02"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhat;
