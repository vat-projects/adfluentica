"use client";
import RequestButton from "@/components/RequestButton";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const OurTools = () => {
  return (
    <section className="our-tools">
      <div className="our-tools__container _container">
        <div className="our-tools__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
            className="col-01"
          >
            <h2>OUR TOOLS</h2>
            <span className="desktop">
              <RequestButton text={"Try now"} />
            </span>
            
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
                <b>Real-Time Click Tracking</b> Monitor campaign performance
                instantly and take immediate action.
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
                <b>Source Performance Analysis</b> Identify and scale the most
                effective traffic sources effortlessly.
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
                <b>Detailed Conversion Reports</b> Gain deep insights into what
                drives results to optimize campaigns effectively.
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
                <b>Advanced Fraud Detection</b> Protect your investment with
                state-of-the-art fraud prevention and alerts.
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
                <b>Geo and Device Targeting</b> Maximize ROI by reaching the
                right audience at the right time and place.
              </p>
            </motion.div>
            <span className="mobile">
              <RequestButton text={"Try now"} />
            </span>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.3}
        >
          <Image
            src={"/images/advertisers/tools.png"}
            alt="hero"
            width={1170}
            height={200}
            className="desktop"
          />
          <Image
            src={"/images/advertisers/toolsMob.png"}
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

export default OurTools;
