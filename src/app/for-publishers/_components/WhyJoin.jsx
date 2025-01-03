"use client";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const WhyJoin = () => {
  return (
    <section className="why-join">
      <div className="why-join__container _container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.2}
          className="why-join__title"
        >
          WHY JOIN ADFLUENTICA
        </motion.h2>
        <div className="why-join__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
            className="col-01"
          >
            <p>
              <b>Diverse Campaigns for All Traffic Types</b> Choose from a wide
              variety of offers tailored to your traffic sources and audience.
            </p>
            <p>
              <b>Custom Advertising Resources</b> Access ready-to-use creatives,
              landing pages, and promotional materials.
            </p>
            <p>
              <b>Flexible Campaign Models</b> Select multiple campaigns with
              tailored options to suit any time frame or traffic strategy.
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
              <b>Reliable Tracking and Insights</b> Our integrated system
              provides clear and actionable data to refine your campaigns.
            </p>
            <p>
              <b>Flexible Cooperation Models</b> Choose the best fit for your
              goals: RevShare, CPA, CPL, or hybrid models.
            </p>
            <p>
              <b>Dedicated Partner Support</b> Get personalized assistance to
              maximize your revenue and resolve any challenges.
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
            src={"/images/publishers/why.png"}
            alt="hero"
            width={1170}
            height={400}
            className="desktop"
          />
          <Image
            src={"/images/publishers/whyMob.png"}
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

export default WhyJoin;
