import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
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
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}