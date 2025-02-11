"use client";

import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ChevronDown from "./components/ChevronDown/chevrondown";

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
        <ChevronDown />
      </body>
    </html>
  );
}