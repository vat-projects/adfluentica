"use client";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const WeDevelop = () => {
  return (
    <section className="we-develop">
      <div className="we-develop__container _container">
        <div className="we-develop__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
            className="col-01"
          >
            <h2>WE DEVELOP</h2>
            <p>
              From landing pages to full websites, web design to web
              applications, and banners to custom creatives, we create
              everything you need to promote your products or services
              effectively on our affiliate network.
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
            <Image
              src={"/images/advertisers/develop.png"}
              alt="hero"
              width={670}
              height={600}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WeDevelop;
