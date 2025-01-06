import AboutConnect from "./_components/AboutConnect";
import AboutHero from "./_components/AboutHero";
import AboutOur from "./_components/AboutOur";
import AboutRedefining from "./_components/AboutRedefining";
import AboutSimplicity from "./_components/AboutSimplicity";


export const metadata = {
    title: "Affiliate Marketing Platform I Adfluentica",
    description:
        "Explore how to simplify affiliate marketing with trusted partnerships, flexible campaigns, and a frictionless ecosystem. Learn how Adfluentica delivers results.",
    openGraph: {
        title: "Affiliate Marketing Platform I Adfluentica",
        description:
            "Explore how to simplify affiliate marketing with trusted partnerships, flexible campaigns, and a frictionless ecosystem. Learn how Adfluentica delivers results.",
        images: "/images/meta-banner.jpg",
    },
};

export default function About() {
    return (
        <>
            <AboutHero />
            <AboutRedefining />
            <AboutSimplicity />
            <AboutOur />
            <AboutConnect />
        </>
    );
}
