"use client";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const IndustriesLoop = ({ industriesArray }) => {
  return (
    <section className="industries-loop">
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.2}
          className="requirements__title"
        >
          INDUSTRIES WE WORK WITH
        </motion.h2>
        <div className="industries-loop__body">
          {industriesArray.map((industry, index) => (
            <div className="row" key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.3}
                className="col-01"
              >
                <h3>{industry.name}</h3>
                <p>{industry.description}</p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.3}
                className="col-02"
              >
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill={true}
                  className="desktop"
                />
                <Image
                  src={industry.imageMob}
                  alt={industry.name}
                  fill={true}
                  className="mobile"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesLoop;
