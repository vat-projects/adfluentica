"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const FaqTabs = ({ advertisers, publishers }) => {
  const [activeTab, setActiveTab] = useState("advertisers");
  const [activeIndex, setActiveIndex] = useState(null);

  const tabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-tabs">
      <div className="_container">
        <div className="faq-tabs__body">
          <div className="tabs-head">
            <button
              onClick={() => tabChange("advertisers")}
              className={`${activeTab == "advertisers" ? "active" : ""}`}
            >
              FOR ADVERTISERS
            </button>
            <button
              onClick={() => tabChange("publishers")}
              className={`${activeTab == "publishers" ? "active" : ""}`}
            >
              FOR PUBLISHERS
            </button>
          </div>
          <div className="tabs-content">
            <div
              className={`tab ${activeTab == "advertisers" ? "active" : ""}`}
            >
              {advertisers.map((faq, index) => (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  key={index}
                  className={`faq-item ${
                    activeIndex === index ? "opened" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <details className="inner" name={"advertisers"}>
                    <summary className="top">
                      <span>{faq.question}</span>
                      <img src="/images/faq/arrow.svg" />
                    </summary>

                    <div
                      className="faq-content"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </details>
                </motion.div>
              ))}
            </div>
            <div className={`tab ${activeTab == "publishers" ? "active" : ""}`}>
              {publishers.map((faq, index) => (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  key={index}
                  className={`faq-item ${
                    activeIndex === index ? "opened" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <details className="inner" name={"publishers"}>
                    <summary className="top">
                      <span>{faq.question}</span>
                      <img src="/images/faq/arrow.svg" />
                    </summary>

                    <div
                      className="faq-content"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqTabs;
