import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import Footer from "./components/Footer";

const sfPro = localFont({
  src: "../../public/SFPro.otf",
  variable: "--font-sf-pro",
});

export const metadata: Metadata = {
  title: "Arhaan Keshwani",
  description: "Hi, I'm Arhaan. I like building things. I've been coding since 2024, and have been mostly self taught.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfPro.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
