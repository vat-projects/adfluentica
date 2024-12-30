"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const HomeWhat = () => {
    return (
        <section className="home-what">
            <div className="home-what__container _container">
                <div className="home-what__body">
                    <div className="home-what__col-01">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="home-what__title">What is Adfluentica</motion.h2>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="home-what__text">Access premium media, trusted partnerships, and impactful ad placements for effective affiliate campaigns.</motion.div>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.4} 
                        className="home-what__col-02">
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HomeWhat;