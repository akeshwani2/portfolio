"use client";
import { ArrowUpRight } from "lucide-react";
import BottomNav from "../components/Navbar";
export default function Contact() {
  return (
    <div className="h-screen relative">
      <div className="h-screen flex flex-col justify-center md:justify-start md:p-60 md:py-90 px-6 text-[#F5F5DC]">
        <div className="md:text-8xl text-3xl animate-fade-in">get in touch</div>
        <div className="md:text-sm text-xs text-zinc-500 md:mt-12 mt-6 animate-fade-in">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=arhaankeshwani200@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5F5DC] transition-colors flex items-center"
          >
            arhaankeshwani200@gmail.com
            <ArrowUpRight size={14} className="pt-1 ml-1" />
          </a>
        </div>
        <div className="md:text-sm text-xs text-zinc-500 animate-fade-in mt-4">
          <a
            href="https://www.linkedin.com/in/arhaan-keshwani/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5F5DC] transition-colors flex items-center"
          >
            linkedin
            <ArrowUpRight size={14} className="pt-1 ml-1" />
          </a>
        </div>
        <div className="md:text-sm text-xs text-zinc-500 animate-fade-in mt-4">
          <a
            href="https://x.com/akeshwan1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5F5DC] transition-colors flex items-center"
          >
            x
            <ArrowUpRight size={14} className="pt-1 ml-1" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 md:bottom-8 left-4 md:left-60">
        <BottomNav />
      </div>
    </div>
  );
}
