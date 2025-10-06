"use client";
import { useState, useEffect } from "react";
import BottomNav from "./components/Navbar";
import Image from "next/image";

export default function Home() {
  const [currentTime, setCurrentTime] = useState("");
  const [statusIndex, setStatusIndex] = useState(0);
  const statuses = ["wandering", "floating", "dreaming"];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const estTime = now.toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour12: true,
        hour: "numeric",
        minute: "2-digit",
      });
      setCurrentTime(estTime);
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    const statusInterval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statuses.length);
    }, 3600000);
    return () => clearInterval(statusInterval);
  }, []);

  return (
    <div className="h-screen relative ">
      <div className="h-screen md:space-y-10 space-y-6 flex flex-col justify-center md:justify-start md:p-60 md:py-90 px-6 text-[#F5F5DC]">
        <div className="md:text-8xl text-4xl animate-fade-in">
          arhaan keshwani
        </div>
        <div>
          <div className="md:text-sm text-xs text-zinc-500 animate-fade-in">
            most of my projects start as distractions,
          </div>
          <div className="md:text-sm text-xs text-zinc-500 animate-fade-in">
            but end up becoming something quite interesting.
          </div>
        </div>

        <div className="">
          <BottomNav />
        </div>
      </div>

      {/* <div className="absolute bottom-12 md:bottom-8 right-4 md:right-60 animate-fade-in-2 text-xs text-zinc-500 transition-opacity duration-1000 ease-in-out">
        {currentTime} ·{" "}
        <span
          key={statusIndex}
          className="text-xs transition-opacity animate-fade-in-2 opacity-100"
        >
          {statuses[statusIndex]}
        </span>
      </div> */}

      {/* anxiety image background for desktop */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <Image
          src="/anxiety.png"
          alt="anxiety"
          fill
          className="object-contain opacity-15 invert contrast-125"
          style={{ objectPosition: "right center" }}
        />
      </div>

      {/* anxiety image background for mobile */}
      <div className="absolute inset-0 pointer-events-none md:hidden">
        <Image
          src="/anxiety.png"
          alt="anxiety"
          fill
          className="object-cover opacity-15 invert contrast-125"
        />
      </div>
    </div>
  );
}
