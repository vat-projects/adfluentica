"use client";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const ForPublishersHero = () => {
  return (
    <section className="for-publishers-hero">
      <div className="for-publishers-hero__container _container">
        <div className="for-publishers-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.2}
            className="for-publishers-hero__title"
          >
           For Publishers
            <span>Monetize your media with confidence.</span>
          </motion.h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
          >
            <Image
              src={"/images/publishers/hero.png"}
              alt="hero"
              width={1170}
              height={200}
              className="desktop"
            />
            <Image
              src={"/images/publishers/heroMob.png"}
              alt="hero"
              width={1170}
              height={200}
              className="mobile"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForPublishersHero;
