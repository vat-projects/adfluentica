"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const WhyDevelop = () => {
  return (
    <section className="why-develop">
      <div className="why-develop__container _container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.2}
          className="why-develop__title"
        >
          WHY DEVELOP WITH US
        </motion.h2>
        <div className="why-develop__items">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
            className="why-develop__item"
          >
            <h3>Research-Driven Approach</h3>
            <p>
              Every project starts with in-depth research to ensure success.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
            className="why-develop__item"
          >
            <h3>Optimized for Performance</h3>
            <p>
              Our solutions are tailored to deliver maximum results for your
              campaigns.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
            className="why-develop__item"
          >
            <h3>End-to-End Expertise</h3>
            <p>
              We handle everything—from design to content to launch—seamlessly.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
            className="why-develop__item"
          >
            <h3>Fast and Reliable Delivery</h3>
            <p>
              Efficient processes ensure your projects are completed on time,
              every time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyDevelop;
