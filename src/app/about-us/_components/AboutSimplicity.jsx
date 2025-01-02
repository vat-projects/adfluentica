"use client";
import React, { useState, useEffect } from "react";
import "@/styles/about.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const AboutSimplicity = () => {
    return (
        <section className="about-simpli">
            <div className="about-simpli__container _container">
                <div className="about-simpli__body">
                    <div className="about-simpli__col-01">
                        <div className="about-simpli__wrapper">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="about-simpli__title">SIMPLICITY, CLARITY, RESULTS</motion.h2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="about-simpli__text">We make affiliate marketing simple, clear, and effective. With Adfluentica, campaigns are easier to manage, partnerships are stronger, and results speak for themselves.</motion.div>
                        </div>
                    </div>
                    <div className="about-simpli__col-02"></div>
                </div>
            </div>
        </section>
    );
};
export default AboutSimplicity;