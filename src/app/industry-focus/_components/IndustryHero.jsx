"use client";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const IndustryHero = () => {
  return (
    <section className="industry-hero">
      <div className="industry-hero__container _container">
        <div className="industry-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.2}
            className="industry-hero__title"
          >
            Industry Focus:
            <span>Driving success everywhere.</span>
          </motion.h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
          >
            <Image
              src={"/images/industry/hero.png"}
              alt="hero"
              width={1170}
              height={200}
              className="desktop"
            />
            <Image
              src={"/images/industry/heroMob.png"}
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

export default IndustryHero;
