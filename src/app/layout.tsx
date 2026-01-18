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
  description: "",
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
