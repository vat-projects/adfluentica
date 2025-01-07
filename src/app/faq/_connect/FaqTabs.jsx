"use client";
import React, { useState, useEffect, useRef } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const FaqTabs = ({ advertisers, publishers }) => {
  const [activeTab, setActiveTab] = useState("advertisers");
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-tabs">
      <div className="_container">
        <div className="faq-tabs__body">
          <div className="tabs-head">
            <button
              onClick={() => setActiveTab("advertisers")}
              className={`${activeTab === "advertisers" ? "active" : ""}`}
            >
              FOR ADVERTISERS
            </button>
            <button
              onClick={() => setActiveTab("publishers")}
              className={`${activeTab === "publishers" ? "active" : ""}`}
            >
              FOR PUBLISHERS
            </button>
          </div>
          <div className="tabs-content">
            {["advertisers", "publishers"].map((tab) => (
              <div
                key={tab}
                className={`tab ${activeTab === tab ? "active" : ""}`}
              >
                {(tab === "advertisers" ? advertisers : publishers).map(
                  (faq, index) => {
                    const contentRef = useRef(null);
                    const [contentHeight, setContentHeight] = useState(0);

                    useEffect(() => {
                      if (activeIndex === index) {
                        setContentHeight(contentRef.current.scrollHeight);
                      } else {
                        setContentHeight(0);
                      }
                    }, [activeIndex]);

                    return (
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
                        <div className="inner" data-tab={tab}>
                          <div className="top">
                            <span>{faq.question}</span>
                            <img src="/images/faq/arrow.svg" alt="Toggle" />
                          </div>
                          <div
                            ref={contentRef}
                            className="faq-content"
                            style={{
                              height: `${activeIndex === index ? contentHeight : 0}px`,
                              overflow: "hidden",
                              transition: "height 0.3s ease",
                            }}
                            data-height={contentHeight}
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                          />
                        </div>
                      </motion.div>
                    );
                  }
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqTabs;
