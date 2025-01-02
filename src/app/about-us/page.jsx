import AboutConnect from "./_components/AboutConnect";
import AboutHero from "./_components/AboutHero";
import AboutOur from "./_components/AboutOur";
import AboutRedefining from "./_components/AboutRedefining";
import AboutSimplicity from "./_components/AboutSimplicity";


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
