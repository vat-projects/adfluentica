import React from "react";
import "@/styles/faq.scss";
import FaqHero from "./_connect/FaqHero";
import FaqConnect from "./_connect/FaqConnect";
import FaqTabs from "./_connect/FaqTabs";
import faqAdvertisers from "@/lib/faq-advertisers";
import faqPublishers from "@/lib/faq-publishers";

export const metadata = {
  title: "Affiliate Marketing FAQ | Adfluentica",
  description:
    "Discover answers to your affiliate marketing questions. Learn about traffic sources, campaign models, quality control, and tools for success with Adfluentica.",
  openGraph: {
    title: "Affiliate Marketing FAQ | Adfluentica",
    description:
      "Discover answers to your affiliate marketing questions. Learn about traffic sources, campaign models, quality control, and tools for success with Adfluentica.",
    //images: "",
  },
};

const IndustryFocus = () => {
  return (
    <>
      <FaqHero />
      <FaqTabs advertisers={faqAdvertisers} publishers={faqPublishers} />
      <FaqConnect />
    </>
  );
};

export default IndustryFocus;
