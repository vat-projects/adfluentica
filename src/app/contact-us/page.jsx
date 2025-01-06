import ContactsHero from "./_components/ContactsHero";
import ContactsMain from "./_components/ContactsMain";


export const metadata = {
    title: "Contact Us | Adfluentica",
    description:
        "Get in touch with Adfluentica for affiliate marketing solutions. Please submit your inquiry or contact us directly via email or phone. Let’s connect today!",
    openGraph: {
        title: "Contact Us | Adfluentica",
        description:
            "Get in touch with Adfluentica for affiliate marketing solutions. Please submit your inquiry or contact us directly via email or phone. Let’s connect today!",
        images: "/images/meta-banner.jpg",
    },
};

export default function Contacts() {
    return (
        <>
            <ContactsHero />
            <ContactsMain />
        </>
    );
}
