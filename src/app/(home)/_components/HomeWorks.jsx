"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import ArrowRight from "@/icons/other/ArrowRight";

const HomeWork = () => {
    return (
        <section className="home-works">
            <div className="home-works__container _container">
                <div className="home-works__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="home-works__title">HOW IT WORKS</motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="home-works__items">
                        <div className="home-works__item _first">
                            <h3 className="home-works__label">Register</h3>
                            <div className="home-works__text">Create an account in minutes.</div>
                        </div>
                        <ArrowRight />
                        <div className="home-works__item _second">
                            <h3 className="home-works__label">Request</h3>
                            <div className="home-works__text">Choose your niche and  set campaign.</div>
                        </div>
                        <ArrowRight />
                        <div className="home-works__item _third">
                            <h3 className="home-works__label">Advertise</h3>
                            <div className="home-works__text">Launch your campaigns and see results fast.</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HomeWork;