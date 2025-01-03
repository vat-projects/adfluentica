"use client";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Requirements = () => {
  return (
    <section className="requirements">
      <div className="requirements__container _container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.2}
          className="requirements__title"
        >
          OUR REQUIREMENTS
        </motion.h2>
        <Link href="#">Try Now</Link>
        <div className="requirements__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
          >
            <h3>＜80%</h3>
            <p>tier 1 traffic</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
          >
            <h3>Min 1,5%</h3>
            <p>CTR</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
          >
            <h3>Min 10,000 </h3>
            <p>unique visits </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
          >
            <h3>No</h3>
            <p>umalware</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
          >
            <h3>＞50%</h3>
            <p>bounce rate</p>
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
            src={"/images/publishers/requirements.png"}
            alt="hero"
            width={1170}
            height={200}
            className="desktop"
          />
          <Image
            src={"/images/publishers/requirementsMob.png"}
            alt="hero"
            width={1170}
            height={200}
            className="mobile"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Requirements;
