"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import ArrowRight from "@/icons/other/ArrowRight";

const OurWay = () => {
  return (
    <section className="our-way">
      <div className="our-way__container _container">
        <div className="our-way__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.2}
            className="our-way__title"
          >
            OUR WAY
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
            className="our-way__items"
          >
            <div className="our-way__item _first">
              <h3 className="our-way__label">
                In-Depth <br />
                Research
              </h3>
              <div className="our-way__text">
                Comprehensive analysis to shape a winning strategy.
              </div>
            </div>
            <ArrowRight />
            <div className="our-way__item _second">
              <h3 className="our-way__label">
                Optimized <br />
                Development
              </h3>
              <div className="our-way__text">
                From design to content and messaging, crafted for results.
              </div>
            </div>
            <ArrowRight />
            <div className="our-way__item _third">
              <h3 className="our-way__label">
                Testing and <br />
                Launch
              </h3>
              <div className="our-way__text">
                Rigorous testing ensures a flawless delivery and successful
                launch.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurWay;
