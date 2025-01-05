"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import FormAdvertisers from "@/components/FormAdvertisers";

const AdvertiserStart = () => {
  return (
    <section className="home-start">
      <div className="home-start__container _container">
        <div className="home-start__body">
          <h2 className="home-start__title">
            LET'S TALK ABOUT <br />
            YOUR PROJECT
          </h2>
          <div className="home-start__content">
            <div className="home-start__col-01"><FormAdvertisers /></div>
            <div className="home-start__col-02"><img src="/images/home/home-img-07.jpg" alt="image" /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertiserStart;
