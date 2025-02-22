import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { Metadata } from "next";
import ChevronDownWrapper from "./components/ChevronDown/chevrondown";

export const metadata: Metadata = {
  title: "Jakob Dahlin Portfolio",
  description: "Web Design - Graphic Design & Architectural Photography",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Jakob Dahlin Portfolio",
    description: "Web Design - Graphic Design & Architectural Photography",
    url: "https://jakobdahlin.vercel.app",
    siteName: "Jakob Dahlin Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500126/JD__0093_fhwgpq.jpg",
        width: 1200,
        height: 600,
        alt: "Jakob Dahlin Portfolio Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <meta name="theme-color" content="#0c0c0c" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <body>
        <Navbar />
        <Analytics />
        {children}
        <ChevronDownWrapper />
      </body>
    </html>
  );
}
