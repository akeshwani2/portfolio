"use client";

import { ReactNode } from "react";
import Image from "next/image";

interface ThoughtLayoutProps {
  title: string;
  date: string;
  image?: string;
  quote?: string;
  children: ReactNode;
}

export default function ThoughtLayout({
  title,
  date,
  image,
  quote,
  children,
}: ThoughtLayoutProps) {
  return (
    <div
      className="bg-black min-h-screen text-white px-6 py-16 md:py-24"
      style={{ fontFamily: "Perfect" }}
    >
      <div className="max-w-2xl mx-auto">
        {/* header */}
        <div className="mb-16 md:mb-24 animate-[fadeIn_0.6s_ease-out]">
          <a
            href="/thoughts"
            className="text-white/40 hover:text-white/60 transition-colors text-sm italic tracking-tight"
          >
            ← back
          </a>
        </div>

        {/* date */}
        <div className="text-white/40 text-sm mb-4 tracking-tight italic animate-[fadeIn_0.8s_ease-out]">
          {date}
        </div>

        {/* title */}
        <h1 className="text-5xl md:text-7xl tracking-tighter italic mb-12  animate-[fadeIn_1s_ease-out]">
          {title}
        </h1>

        {/* divider */}
        <div className="w-12 h-[1px] bg-white/20 mb-12 animate-[fadeIn_1.2s_ease-out]"></div>

        {/* image */}
        {image && (
          <div className="mb-12 animate-[fadeIn_1.4s_ease-out]">
            <Image
              src={image}
              alt={title}
              width={800}
              height={400}
              className="w-full h-auto rounded-lg opacity-90"
              priority
            />
          </div>
        )}

        {/* quote */}
        {quote && (
          <blockquote className="mb-12 pl-6 border-l-2 border-white/20 animate-[fadeIn_1.6s_ease-out]">
            <p className="text-2xl md:text-3xl tracking-tight italic leading-relaxed text-white/70">
              {quote}
            </p>
          </blockquote>
        )}

        {/* content */}
        <article className="space-y-6 text-lg md:text-xl tracking-tight  leading-relaxed text-white/80 animate-[fadeIn_1.8s_ease-out]">
          {children}
          <div className="text-white/40 mt-4 tracking-tight italic">- AK</div>

        </article>

        {/* footer spacer */}
        <div className="mt-24 md:mt-32"></div>
      </div>
    </div>
  );
}

