// "use client";
// import { useState, useEffect } from "react";
// import BottomNav from "./components/Navbar";
// import Image from "next/image";

// export default function Home() {
//   const [currentTime, setCurrentTime] = useState("");
//   const [statusIndex, setStatusIndex] = useState(0);
//   const statuses = ["wandering", "floating", "dreaming"];

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       const estTime = now.toLocaleTimeString("en-US", {
//         timeZone: "America/New_York",
//         hour12: true,
//         hour: "numeric",
//         minute: "2-digit",
//       });
//       setCurrentTime(estTime);
//     };

//     updateTime();
//     const timeInterval = setInterval(updateTime, 1000);
//     return () => clearInterval(timeInterval);
//   }, []);

//   useEffect(() => {
//     const statusInterval = setInterval(() => {
//       setStatusIndex((prev) => (prev + 1) % statuses.length);
//     }, 3600000);
//     return () => clearInterval(statusInterval);
//   }, []);

//   return (
//     <div className="h-screen relative ">
//       <div className="h-screen md:space-y-10 space-y-6 flex flex-col justify-center md:justify-start md:p-60 md:py-90 px-6 text-[#F5F5DC]">
//         <div className="md:text-8xl text-4xl animate-fade-in">
//           arhaan keshwani
//         </div>
//         <div>
//           <div className="md:text-sm text-xs text-zinc-500 animate-fade-in">
//             most of my projects start as distractions,
//           </div>
//           <div className="md:text-sm text-xs text-zinc-500 animate-fade-in">
//             but end up becoming something quite interesting.
//           </div>
//         </div>

//         <div className="">
//           <BottomNav />
//         </div>
//       </div>

//       {/* <div className="absolute bottom-12 md:bottom-8 right-4 md:right-60 animate-fade-in-2 text-xs text-zinc-500 transition-opacity duration-1000 ease-in-out">
//         {currentTime} ·{" "}
//         <span
//           key={statusIndex}
//           className="text-xs transition-opacity animate-fade-in-2 opacity-100"
//         >
//           {statuses[statusIndex]}
//         </span>
//       </div> */}

//       {/* anxiety image background for desktop */}
//       <div className="absolute inset-0 pointer-events-none hidden md:block">
//         <Image
//           src="/anxiety.png"
//           alt="anxiety"
//           fill
//           className="object-contain opacity-15 invert contrast-125"
//           style={{ objectPosition: "right center" }}
//         />
//       </div>

//       {/* anxiety image background for mobile */}
//       <div className="fixed inset-0 pointer-events-none md:hidden">
//         <Image
//           src="/anxiety.png"
//           alt="anxiety"
//           fill
//           className="object-cover opacity-15 invert contrast-125"
//           priority
//         />
//       </div>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div
      className=" bg-[#ffffff] min-h-screen flex items-center justify-center"
      style={{ fontFamily: "Geist" }}
    >
      <main className="max-w-3xl mx-auto px-16">
        <h1 className="md:text-5xl text-3xl leading-tight tracking-tight">
          <div className="flex flex-col gap-2 md:pt-0">
            <span
              className="text-black fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Arhaan Keshwani
            </span>
          </div>
        </h1>

        <div className="pt-8  md:text-xl text-sm text-black leading-relaxed max-w-5xl">
          <div className="italic">
            <div className="fade-in" style={{ animationDelay: "0.5s" }}>
              previously i&apos;ve: built{" "}
              <a
                href="https://lyra.services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-bold bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_1px] bg-[position:0_100%] hover:bg-[length:100%_1px]  transition-all duration-300"
              >
                Lyra (sold)
              </a>{" "}
              and{" "}
              <a
                href="https://elevenmails.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-bold bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_1px] bg-[position:0_100%] hover:bg-[length:100%_1px]  transition-all duration-300"
              >
                Eleven (acq. Pally, YC S25)
              </a>
              ,
            </div>
            <div className="fade-in pt-2" style={{ animationDelay: "0.7s" }}>
              received a grant from{" "}
              <a
                href="https://www.1517fund.com/medici"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-bold bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_1px] bg-[position:0_100%] hover:bg-[length:100%_1px]  transition-all duration-300"
              >
                1517 Fund
              </a>{" "}
              to build adaptive eyewear,
            </div>
            <div className="fade-in pt-2" style={{ animationDelay: "0.9s" }}>
              built{" "}
              <a
                href="https://trace-xi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-bold bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_1px] bg-[position:0_100%] hover:bg-[length:100%_1px]  transition-all duration-300"
              >
                Trace
              </a>
              , all proceeds donated to men&apos;s mental health,
            </div>
            <div className="fade-in pt-2" style={{ animationDelay: "1.1s" }}>
              interned at{" "}
              <span className="text-black font-bold ">jpmorgan</span> as a
              software engineer,
            </div>
          </div>
          <div className="fade-in italic pt-8" style={{ animationDelay: "1.3s" }}>
            now i&apos;m working on{" "}
            <a
              href="https://axle-kappa.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-bold bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_1px] bg-[position:0_100%] hover:bg-[length:100%_1px]  transition-all duration-300"
            >
              axle
            </a>
            ,
          </div>
          <div
            className="fade-in pt-8 flex justify-between"
            style={{ animationDelay: "1.5s" }}
          >
            <a
              href="https://www.linkedin.com/in/arhaan-keshwani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_1px] bg-[position:0_100%] hover:bg-[length:100%_1px] transition-all duration-300 font-bold"
            >
              linkedin
            </a>
            <a
              href="https://x.com/akeshwan1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_1px] bg-[position:0_100%] hover:bg-[length:100%_1px] transition-all duration-300 font-bold"
            >
              x
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
