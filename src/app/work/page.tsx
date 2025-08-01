"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      name: "trace",
      screenshot: "/hf0.gif",
      videoFile: "/trace.mov",
      description:
        "a digital trace of your inner world · the only journaling app you'll ever need",
      year: "2025",
      link: "https://trace-xi.vercel.app",
    },
    {
      name: "eleven",
      screenshot: "/eleven.png",
      description:
        "all communication in one place · built this at founders, inc.",
      descriptionWithLinks:
        "all communication in one place · built this at <a href='https://f.inc' target='_blank' rel='noopener noreferrer' style='color: #F5F5DC; text-decoration: none;' onmouseover='this.style.color=\"white\"; this.style.textDecoration=\"underline\"' onmouseout='this.style.color=\"#F5F5DC\"; this.style.textDecoration=\"none\"'>founders, inc.</a>",
      year: "2025",
      link: "https://geteleven.ai",
    },
    {
      name: "lyra",
      screenshot: "/lyra.png",
      description: "backed by NVIDIA · recently acquired",
      year: "2024",
      link: "https://lyra.services",
    },
    {
      name: "echo",
      screenshot: "/echo.png",
      description: "memory for ai",
      year: "2024",
      link: "https://echo-project.com",
    },
    {
      name: "???",
      screenshot: "/hf0.gif",
      description: "",
      year: "",
      link: "https://www.hf0.com/",
    },
  ];

  return (
    <div className="h-screen relative bg-black">
      <div className="absolute top-6 left-6 md:top-10 md:left-60 z-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-zinc-500 hover:text-[#F5F5DC] transition-colors group"
        >
          <span>back</span>
        </Link>
      </div>

      <div className="flex items-center justify-center h-full px-6 md:px-0">
        <div className={`relative w-full max-w-[1100px]`}>
          {projects[selectedProject].videoFile ? (
            <video
              src={projects[selectedProject].videoFile}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          ) : (
            <div className="relative w-full h-full">
              <img
                src={projects[selectedProject].screenshot}
                alt={projects[selectedProject].name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-24 left-6 right-6 md:right-10 md:top-1/2 md:-translate-y-1/2 md:left-auto md:bottom-auto text-[#F5F5DC] opacity-60">
        <div className="flex flex-col md:block text-sm space-y-2 md:space-y-4">
          <div>
            <div className="text-xs text-zinc-500 uppercase tracking-wider">
              {projects[selectedProject].year}
            </div>
            <div className="flex items-center gap-2">
              <div className="text-lg font-light">
                {projects[selectedProject].name}
              </div>
              <Link
                href={projects[selectedProject].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 pt-1.25 hover:text-[#F5F5DC] transition-colors"
              >
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="text-xs text-zinc-400 max-w-full md:max-w-[200px] leading-relaxed">
            {projects[selectedProject].descriptionWithLinks ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: projects[selectedProject].descriptionWithLinks,
                }}
              />
            ) : (
              projects[selectedProject].description
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-6 md:bottom-10 md:left-60">
        <div className="flex flex-wrap gap-6 md:gap-10 max-w-4xl">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setSelectedProject(index)}
              className={`text-xs transition-all duration-300 ${
                selectedProject === index
                  ? "text-[#F5F5DC] scale-110"
                  : "text-zinc-500 hover:text-zinc-300 hover:scale-105 cursor-pointer"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs opacity-50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="capitalize">{project.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}