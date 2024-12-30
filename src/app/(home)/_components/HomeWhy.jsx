"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const HomeWhy = () => {
    return (
        <section className="home-why">
            <div className="home-why__container _container">
                <div className="home-why__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="home-why__title">Why choose Adfluentica</motion.h2>
                    <div className="home-why__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="home-why__item">
                            <h3 className="home-why__label">Exclusive Campaigns</h3>
                            <div className="home-why__text">Unlock high-demand campaigns for top results.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="home-why__item">
                            <h3 className="home-why__label">Trusted Media Partners</h3>
                            <div className="home-why__text">Unlock high-demand campaigns for top results.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="home-why__item">
                            <h3 className="home-why__label">Seamless Integration</h3>
                            <div className="home-why__text">Get started quickly  with hassle-free onboarding.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="home-why__item">
                            <h3 className="home-why__label">Flexible Agreements</h3>
                            <div className="home-why__text">Tailored conditions to suit your business needs.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.5}
                            className="home-why__item">
                            <h3 className="home-why__label">Scalable Solutions</h3>
                            <div className="home-why__text">Grow your campaigns with adaptable strategies.</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeWhy;