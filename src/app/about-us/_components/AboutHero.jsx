"use client";
import React, { useState, useEffect } from "react";
import "@/styles/about.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const AboutHero = () => {
    return (
        <section className="about-hero">
            <div className="about-hero__container _container">
                <div className="about-hero__body">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="about-hero__image-01"></motion.div>
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="about-hero__title">ADFLUENTICA:</motion.h1>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.4}
                        className="about-hero__text">Affiliate marketing simplified.</motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.5}
                        className="about-hero__image-02"></motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;