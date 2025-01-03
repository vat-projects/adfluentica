import React from "react";
import "@/styles/for-advertisers.scss";
import ForAdvertisersHero from "./_components/ForAdvertisersHero";
import WhatYouGet from "./_components/WhatYouGet";
import OurWay from "./_components/OurWay";
import WhyDevelop from "./_components/WhyDevelop";
import WeDevelop from "./_components/WeDevelop";
import OurTools from "./_components/OurTools";
import AdvertiserStart from "./_components/AdvertiserStart";

export const metadata = {
  title: "Affiliate Marketing Solutions for Advertisers | Adfluentica",
  description:
    "Discover how Adfluentica empowers advertisers with impactful campaigns, real-time tracking, anti-fraud systems, and tailored creative development. Drive results today!",
  openGraph: {
    title: "Affiliate Marketing Solutions for Advertisers | Adfluentica",
    description:
      "Discover how Adfluentica empowers advertisers with impactful campaigns, real-time tracking, anti-fraud systems, and tailored creative development. Drive results today!",
    //images: "",
  },
};

const ForAdvertisers = () => {
  return (
    <>
      <ForAdvertisersHero />
      <WhatYouGet />
      <OurTools />
      <WeDevelop />
      <OurWay />
      <WhyDevelop />
      <AdvertiserStart />
    </>
  );
};

export default ForAdvertisers;
