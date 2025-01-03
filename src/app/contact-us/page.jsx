import ContactsHero from "./_components/ContactsHero";
import ContactsMain from "./_components/ContactsMain";


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

export default function Contacts() {
    return (
        <>
            <ContactsHero />
            <ContactsMain />
        </>
    );
}
