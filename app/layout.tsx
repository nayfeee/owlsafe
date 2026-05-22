import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieBanner from "../components/CookieBanner";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "OwlSafe | Asbestos Surveys in Leeds",
  description:
    "Fast, reliable asbestos survey quotes across Leeds and surrounding areas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GYDQCKV6WX"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GYDQCKV6WX');
          `}
        </Script>

        {children}
        <CookieBanner />
      </body>
    </html>
  );
}