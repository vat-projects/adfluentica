import HomeDiscover from "./_components/HomeDiscover";
import HomeExplore from "./_components/HomeExplore";
import HomeHero from "./_components/HomeHero";
import HomeReady from "./_components/HomeReady";
import HomeStart from "./_components/HomeStart";
import HomeWhat from "./_components/HomeWhat";
import HomeWhy from "./_components/HomeWhy";
import HomeWork from "./_components/HomeWorks";

export const metadata = {
  title: "",
  description:
    "",
  openGraph: {
    title: "",
    description:
      "",
    images: "",
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
