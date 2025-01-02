"use client";
import React, { useState, useEffect } from "react";
import "@/styles/about.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutConnect = () => {
    return (
        <section className="about-connect">
            <div className="about-connect__container _container">
                <div className="about-connect__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="about-connect__title">LET’S CONNECT</motion.h2>
                    <div className="about-connect__content">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="about-connect__col-01"></motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="about-connect__col-02">
                            <h3 className="about-connect__label">Have questions or need more information?</h3>
                            <div className="about-connect__text">We’re here to help. Contact us today to see how Adfluentica can transform your affiliate marketing campaigns.</div>
                            <Link href="/contact-us" className="about-connect__link">Contact Us</Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default AboutConnect;