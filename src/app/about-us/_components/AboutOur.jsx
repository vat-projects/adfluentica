"use client";
import React, { useState, useEffect } from "react";
import "@/styles/about.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const AboutOur = () => {
    return (
        <section className="about-our">
            <div className="about-our__container _container">
                <div className="about-our__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="about-our__title">OUR BENEFITS</motion.h2>
                    <div className="about-our__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="about-our__item">
                            <h3 className="about-our__label">Trusted Media Partnerships</h3>
                            <div className="about-our__text">Work with a carefully vetted network for reliability and quality.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="about-our__item">
                            <h3 className="about-our__label">Wide Industry Coverage</h3>
                            <div className="about-our__text">From mainstream to restricted niches, we’ve got you covered.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="about-our__item">
                            <h3 className="about-our__label">Flexible Campaign Models</h3>
                            <div className="about-our__text">Tailored solutions for every advertiser and publisher.</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default AboutOur;