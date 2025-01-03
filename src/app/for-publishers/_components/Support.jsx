"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const Support = () => {
  return (
    <section className="support">
      <div className="support__container _container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.2}
          className="support__title"
        >
          PUBLISHERS SUPPORT
        </motion.h2>
        <div className="support__items">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
            className="support__item"
          >
            <h3>
              Custom Marketing <br />
              Materials
            </h3>
            <p>
              Banners, teasers, and creatives designed to boost performance.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
            className="support__item"
          >
            <h3>
              Website <br />
              Optimization
            </h3>
            <p>Guidance to enhance your site's engagement and effectiveness.</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
            className="support__item"
          >
            <h3>
              Promotional <br />
              Resources
            </h3>
            <p>
              Access landing pages, banners, and everything you need to promote
              offers.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Support;
