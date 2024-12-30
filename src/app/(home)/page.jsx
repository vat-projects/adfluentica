import HomeDiscover from "./_components/HomeDiscover";
import HomeExplore from "./_components/HomeExplore";
import HomeHero from "./_components/HomeHero";
import HomeReady from "./_components/HomeReady";
import HomeWhat from "./_components/HomeWhat";

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
    </>
  );
}
