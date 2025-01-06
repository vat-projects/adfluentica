import HomeDiscover from "./_components/HomeDiscover";
import HomeExplore from "./_components/HomeExplore";
import HomeHero from "./_components/HomeHero";
import HomeReady from "./_components/HomeReady";
import HomeStart from "./_components/HomeStart";
import HomeWhat from "./_components/HomeWhat";
import HomeWhy from "./_components/HomeWhy";
import HomeWork from "./_components/HomeWorks";

export const metadata = {
  title: "Affiliate Marketing Solutions for Businesses | Adfluentica",
  description:
    "Explore how Adfluentica transforms affiliate marketing with tailored strategies, powerful tools, and proven results. Start achieving your goals today!",
  openGraph: {
    title: "Affiliate Marketing Solutions for Businesses | Adfluentica",
    description:
      "Explore how Adfluentica transforms affiliate marketing with tailored strategies, powerful tools, and proven results. Start achieving your goals today!",
      images: "/images/meta-banner.jpg",
  },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeReady />
      <HomeWhat />
      <HomeDiscover />
      <HomeExplore />
      <HomeWhy />
      <HomeWork />
      <HomeStart />
    </>
  );
}
