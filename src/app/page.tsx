"use client";
import { useState, useEffect } from "react";
import BottomNav from "./components/Navbar";

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
    <div className="h-screen relative">
      <div className="h-screen flex flex-col justify-center md:justify-start md:p-60 md:py-90 px-6 text-[#F5F5DC]">
        <div className="md:text-8xl text-3xl animate-fade-in">
          arhaan keshwani
        </div>
        <div className="md:text-sm text-xs text-zinc-500 md:mt-8 mt-4 animate-fade-in">
          most of my projects start as distractions,
        </div>
        <div className="md:text-sm text-xs text-zinc-500 animate-fade-in">
          but end up becoming something quite interesting.
        </div>
        <div className="md:text-sm text-xs text-zinc-500 mt-6 md:mt-8 animate-fade-in">
          current read:{" "}
          <a
            href="https://navalmanack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-[#F5F5DC] transition-colors cursor-pointer"
          >
            The Almanack of Naval Ravikant
            
          </a>
        </div>
     
      </div>

      <div className="absolute bottom-12 md:bottom-8 right-4 md:right-60 animate-fade-in-2 text-xs text-zinc-500 transition-opacity duration-1000 ease-in-out">
        {currentTime} ·{" "}
        <span
          key={statusIndex}
          className="text-xs transition-opacity animate-fade-in-2 opacity-100"
        >
          {statuses[statusIndex]}
        </span>
      </div>

      <div className="absolute bottom-12 md:bottom-8 left-4  md:left-60">
        <BottomNav />
      </div>
    </div>
  );
}