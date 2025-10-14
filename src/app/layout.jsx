import React from "react";
import { Urbanist, Roboto, Space_Grotesk } from "next/font/google";
import "@/styles/base.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import { GoogleAnalytics } from "@next/third-parties/google";
import { PopupsProvider } from "@/context/PopupsContext";
import OrderPopup from "@/components/OrderPopup";
import { CookiePopup } from "@/components/CookiePopup";


const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap"
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} ${roboto.className} ${spaceGrotesk.className}`}>
        {/* Это уже актуальная аналитика */}
        <GoogleAnalytics gaId="G-3KC08Q4ZR7" />
        <PopupsProvider>
          <Preloader />
          <Header />
          <main className="site">{children}</main>
          <Footer />
          <CookiePopup />
          <OrderPopup />
        </PopupsProvider>
      </body>
    </html>
  );
}; 