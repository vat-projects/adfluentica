"use client";
import React, { useState, useEffect } from "react";
import "@/styles/contacts.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ContactsHero = () => {
    return (
        <section className="contacts-hero">
            <div className="contacts-hero__container _container">
                <div className="contacts-hero__body">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="contacts-hero__image"></motion.div>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="contacts-hero__title">GENERAL REQUESTS</motion.h2>
                    <div className="contacts-hero__content">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="contacts-hero__col-01">
                            <div className="contacts-hero__text">If you have any questions or inquiries, feel free to contact our team directly using this form. We’re here to assist you! </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.5}
                            className="contacts-hero__col-02"></motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactsHero;