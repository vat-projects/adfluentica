"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import RequestButton from "@/components/RequestButton";

const HomeReady = () => {
    return (
        <section className="home-ready">
            <div className="home-ready__container _container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    custom={0.2}
                    className="home-ready__body">
                    <h2 className="home-ready__title">Ready?<span>Let’s go!</span></h2>
                    <RequestButton
                        className={"home-ready__join"}
                        text={"JOIN"}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HomeReady;