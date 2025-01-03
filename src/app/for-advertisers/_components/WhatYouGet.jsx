"use client";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const WhatYouGet = () => {
  return (
    <section className="what-you-get">
      <div className="what-you-get__container _container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.2}
          className="what-you-get__title"
        >
          WHAT YOU GET
        </motion.h2>
        <div className="what-you-get__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
            className="col-01"
          >
            <p>
              <b>Full Technical Support</b> Get all the essential tools and
              integrations to streamline your campaigns.
            </p>
            <p>
              <b>Guaranteed Lead Delivery</b> Achieve your growth targets with
              the volume and quality of leads you need.
            </p>
            <p>
              <b>Continuous Traffic Quality Control</b> Every click is monitored
              to ensure high-value and genuine engagement.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
            className="col-02"
          >
            <p>
              <b>Advanced Anti-Fraud Systems</b> Advanced tools protect your
              campaigns from invalid traffic and fraud.
            </p>
            <p>
              <b>Creative Development Services</b> We craft promotional
              materials tailored to your needs.
            </p>
            <p>
              <b>Flexible Campaign Models</b> Choose from tailored plans that
              adapt to your specific goals and budget.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.3}
        >
          <Image
            src={"/images/advertisers/get.png"}
            alt="hero"
            width={1170}
            height={400}
            className="desktop"
          />
          <Image
            src={"/images/advertisers/getMob.png"}
            alt="hero"
            width={1170}
            height={400}
            className="mobile"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouGet;
