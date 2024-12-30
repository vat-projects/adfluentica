"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const HomeDiscover = () => {
    return (
        <section className="home-discover">
            <div className="home-discover__container _container">
                <div className="home-discover__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="home-discover__title">Discover Adfluentica</motion.h2>
                    <motion.h3
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="home-discover__label">WHO WE WORK WITH</motion.h3>
                    <div className="home-discover__bubbls">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeDiscover;