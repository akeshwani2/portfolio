import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import Footer from "./components/Footer";

const sfProRounded = localFont({
  src: [
    {
      path: "../../public/SFProRounded-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/SFProRounded-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/SFProRounded-Semibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro-rounded",
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
        className={`${sfProRounded.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
