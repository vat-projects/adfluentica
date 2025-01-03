"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const IndustryConnect = () => {
    return (
        <section className="industry-connect">
            <div className="industry-connect__container _container">
                <div className="industry-connect__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="industry-connect__title">DID NOT FIND YOUR INDUSTRY? </motion.h2>
                    <div className="industry-connect__content">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="industry-connect__col-01"></motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="industry-connect__col-02">
                            <h3 className="industry-connect__label">Your opportunities and our possibilities—let’s discuss how we can skyrocket your project.</h3>
                            <Link href="/contact-us" className="industry-connect__link">Contact Us</Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default IndustryConnect;