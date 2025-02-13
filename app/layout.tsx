import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { Metadata } from "next";
import ChevronDownWrapper from "./components/ChevronDown/chevrondown";

export const metadata: Metadata = {
  title: "Jakob Dahlin Portfolio",
  description: "Web Design - Graphic Design & Architectural Photography",
  openGraph: {
    title: "Jakob Dahlin Portfolio",
    description: "Web Design - Graphic Design & Architectural Photography",
    url: "https://jakobdahlin.vercel.app",
    siteName: "Jakob Dahlin Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300986/jdarch14_vqagqg.jpg",
        width: 1200,
        height: 630,
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
      <body>
        <Navbar />
        {children}
        <ChevronDownWrapper />
      </body>
    </html>
  );
}
