"use client";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const TrafficSources = () => {
  return (
    <section className="traffic-sources">
      <div className="traffic-sources__container _container">
        <div className="traffic-sources__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
            className="col-01"
          >
            <h2>
              TRAFFIC <br />
              SOURCES
            </h2>
            <p>
              We accept many traffic sources, ensuring flexibility and
              compatibility for all publishers. Choose the channels that work
              best for you and your audience:
            </p>
          </motion.div>
          <div className="col-02">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
            >
              <p>
                <b>Social Networks</b>
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
            >
              <p>
                <b>Contextual Ads</b>
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
            >
              <p>
                <b>Push Notifications</b>
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
            >
              <p>
                <b>Email Marketing</b>
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
            >
              <p>
                <b>VideoBanners/Teasers</b>
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
            >
              <p>
                <b>PPC</b>
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
            >
              <p>
                <b>SEO</b>
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
            >
              <p>
                <b>Websites</b>
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
            >
              <p>
                <b>Native Ads</b>
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
            >
              <p>
                <b>Click/Popunder Ads</b>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrafficSources;
