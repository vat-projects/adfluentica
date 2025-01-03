import React from "react";
import "@/styles/industry-focus.scss";
import IndustryHero from "./_components/IndustryHero";
import industries from "@/lib/industries";
import IndustriesLoop from "./_components/IndustriesLoop";
import IndustryConnect from "./_components/IndustryConnect";

export const metadata = {
  title: "Industries We Serve | Adfluentica",
  description:
    "Explore Adfluentica's tailored affiliate marketing solutions for finance, entertainment, education, health, real estate, technology, travel, and more. Let’s drive your success!",
  openGraph: {
    title: "Industries We Serve | Adfluentica",
    description:
      "Explore Adfluentica's tailored affiliate marketing solutions for finance, entertainment, education, health, real estate, technology, travel, and more. Let’s drive your success!",
    //images: "",
  },
};

const IndustryFocus = () => {
  return (
    <>
      <IndustryHero />
      <IndustriesLoop industriesArray={industries} />
      <IndustryConnect />
    </>
  );
};

export default IndustryFocus;
