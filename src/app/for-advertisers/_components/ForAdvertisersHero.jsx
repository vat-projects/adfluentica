"use client";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const ForAdvertisersHero = () => {
  return (
    <section className="for-advertisers-hero">
      <div className="for-advertisers-hero__container _container">
        <div className="for-advertisers-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.2}
            className="for-advertisers-hero__title"
          >
            For Advertisers:
            <span>Powerful media for impactful campaigns.</span>
          </motion.h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
          >
            <Image
              src={"/images/advertisers/hero.png"}
              alt="hero"
              width={1170}
              height={200}
              className="desktop"
            />
            <Image
              src={"/images/advertisers/heroMob.png"}
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

export default ForAdvertisersHero;
