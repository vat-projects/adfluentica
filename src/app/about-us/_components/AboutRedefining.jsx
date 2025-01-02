"use client";
import React, { useState, useEffect } from "react";
import "@/styles/about.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const AboutRedefining = () => {
    return (
        <section className="about-red">
            <div className="about-red__container _container">
                <div className="about-red__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="about-red__title">REDEFINING AFFILIATE MARKETING</motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="about-red__text">Affiliate marketing should be effortless, effective, and natural. Our vision is to create a frictionless ecosystem where advertisers and publishers work seamlessly together, achieving powerful results without unnecessary barriers.</motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.4}
                        className="about-red__image"></motion.div>
                </div>
            </div>
        </section>
    );
};
export default AboutRedefining;