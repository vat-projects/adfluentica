"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeExplore = () => {
    return (
        <section className="home-explore">
            <div className="home-explore__container _container">
                <div className="home-explore__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="home-explore__title">Explore Industries</motion.h2>
                    <motion.h3
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="home-explore__subtitle">
                        FOR ADVERTISERS
                    </motion.h3>
                    <div className="home-explore__content">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="home-explore__col-01">
                            <h4 className="home-explore__label">Reach your audience with precision and ease through our trusted network of publishers.</h4>
                            <ul className="home-explore__list">
                                Our Offer:
                                <li className="home-explore__item">High advertising demand to keep your inventory filled.</li>
                                <li className="home-explore__item">Various cooperation models tailored to your preferences.</li>
                                <li className="home-explore__item">Reliable partnerships for long-term success.</li>
                            </ul>
                            <Link href="#" className="home-explore__more">Learn More</Link>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="home-explore__col-02"></motion.div>
                    </div>
                    <motion.h3
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="home-explore__subtitle _last">
                        FOR PUBLISHERS
                    </motion.h3>
                    <div className="home-explore__content _last">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="home-explore__col-01">
                            <h4 className="home-explore__label">Monetize your traffic with premium campaigns from trusted advertisers.</h4>
                            <ul className="home-explore__list">
                                Our Offer:
                                <li className="home-explore__item">High advertising demand to keep your inventory filled.</li>
                                <li className="home-explore__item">Various cooperation models tailored to your preferences.</li>
                                <li className="home-explore__item">Reliable partnerships for long-term success.</li>
                            </ul>
                            <Link href="#" className="home-explore__more">Learn More</Link>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="home-explore__col-02 _last"></motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeExplore;