"use client";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const FaqHero = () => {
  return (
    <section className="faq-hero">
      <div className="faq-hero__container _container">
        <div className="faq-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.2}
            className="faq-hero__title"
          >
            FAQ
          </motion.h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
          >
            <Image
              src={"/images/faq/hero.png"}
              alt="hero"
              width={1170}
              height={400}
              className="desktop"
            />
            <Image
              src={"/images/faq/heroMob.png"}
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

export default FaqHero;
