import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { Metadata } from "next";
import ChevronDownWrapper from "./components/ChevronDown/chevrondown"; // Use a client wrapper

export const metadata: Metadata = {
  title: "Jakob Dahlin Portfolio",
  description: "Web Design - Graphic Design & Architectural Photography",
  openGraph: {
    title: "Jakob Dahlin Portfolio",
    description: "Web Design - Graphic Design & Architectural Photography",
    images: [
      {
        url: "https://jakobdahlin.vercel.app/logos/JDIDWi.png",
        width: 1200,
        height: 630,
        alt: "Jakob Dahlin Portfolio Preview",
      },
    ],
    url: "https://jakobdahlin.vercel.app",
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
        <ChevronDownWrapper /> {/* Use the wrapper instead of direct import */}
      </body>
    </html>
  );
}
