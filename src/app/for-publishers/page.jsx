import React from "react";
import "@/styles/for-publishers.scss";
import ForPublishersHero from "./_components/ForPublishersHero";
import PublishersStart from "./_components/PublishersStart";
import WhyJoin from "./_components/WhyJoin";
import Support from "./_components/Support";
import TrafficSources from "./_components/TrafficSources";
import Requirements from "./_components/Requirements";

export const metadata = {
  title: "Affiliate Marketing Opportunities for Publishers | Adfluentica",
  description:
    "Start monetizing your media with Adfluentica! Explore diverse campaigns, ready-to-use advertising resources, and reliable tracking to maximize revenue.",
  openGraph: {
    title: "Affiliate Marketing Opportunities for Publishers | Adfluentica",
    description:
      "Start monetizing your media with Adfluentica! Explore diverse campaigns, ready-to-use advertising resources, and reliable tracking to maximize revenue.",
    images: "/images/meta-banner.jpg",
  },
};

const ForPublishers = () => {
  return (
    <>
      <ForPublishersHero />
      <WhyJoin />
      <TrafficSources />
      <Requirements />
      <Support />
      <PublishersStart />
    </>
  );
};

export default ForPublishers;
